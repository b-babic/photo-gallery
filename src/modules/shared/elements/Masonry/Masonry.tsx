import * as React from 'react';

import { uid } from 'modules/shared/utils/uid';

import { removeKeys } from './utils/remove-keys';

import styles from './Masonry.module.css';

interface Props {
  columnWidth?: number;
  container?: React.ReactElement<any>;
  item?: React.ReactElement<any>;
  rowGap?: number;
  innerRef?: any;
  ref?: React.RefObject<React.ComponentType<Props> & { resize: () => void }>;
}

// since there is no good way to set cs --var in react yet.
const DELTA: number = 0.125;
const INITIAL_DELAY: number = 1.3;

const blackListProps = ['rowGap', 'columnWidth', 'uniqueid'];
const removeBlackListed = removeKeys(blackListProps);

class Masonry extends React.Component<Props> {
  // eslint-disable-next-line react/static-property-placement
  static defaultProps = {
    columnWidth: 260,
    container: React.createElement('div'),
    item: React.createElement('article'),
    rowGap: 10,
  };

  gridId: string | null = null;

  reposition: boolean = false;

  elements: HTMLElement[] = [];

  grid: null | HTMLElement = null;

  componentDidMount() {
    this.setValues();
    this.onLoadImages();
  }

  componentDidUpdate() {
    this.setValues();
  }

  getRef = (ref: HTMLElement) => {
    if (ref && ref.firstElementChild) {
      this.elements.push(ref);
    }
  };

  setValues = () => {
    const { rowGap = 0 } = this.props;

    if (this.elements.length === 0) {
      return;
    }

    this.elements.forEach((item: HTMLElement) => {
      const itemRef: HTMLElement = item;

      if (itemRef && itemRef.firstElementChild) {
        const firstElement: Element = itemRef.firstElementChild;
        const itemHeight: number = firstElement.getBoundingClientRect().height;
        const rowSpan: number = Math.ceil((itemHeight + rowGap) / rowGap);

        itemRef.style.gridRowEnd = `span ${rowSpan}`;
      }
    });

    if (!this.reposition) {
      window.requestAnimationFrame(this.setValues);
      this.reposition = true;
    }
  };

  onLoadImages = () => {
    if (this.grid) {
      const images = this.grid.getElementsByTagName('img');

      Array.from(images).forEach((img: HTMLImageElement): void => {
        const imageRef = img;

        imageRef.onload = () => {
          this.setValues();
        };
      });
    }
  };

  createGridStyle = () => {
    const { rowGap = 0, columnWidth = 0 } = this.props;

    return `
      <style>
        .${styles.container} {
          display: grid;
          grid-gap: ${rowGap}px;
          grid-template-columns: repeat(auto-fill, minmax(${columnWidth}px, 1fr));
        }
      </style>`;
  };

  render() {
    const {
      children,
      item = React.createElement('article'),
      container = React.createElement('div'),
      innerRef,
      ...compProps
    } = this.props;

    const hasChildren: boolean = React.Children.count(children) > 0;

    if (!hasChildren) {
      return null;
    }

    const refItem = (n: HTMLElement): void => {
      this.getRef(n);
    };

    const refGrid = (node: HTMLElement): void => {
      this.grid = node;

      if (innerRef && innerRef.current) {
        innerRef.current = node;
        innerRef.current.resize = this.setValues;
      }
    };

    const renderChildren = React.Children.map(children, (child: React.ReactNode, index: number) => {
      const itemProps = removeBlackListed({
        key: uid(),
        ref: refItem,
        className: styles.item,
      });

      if (item) {
        return React.createElement(
          item.type,
          { style: { ...item.props, animationDelay: `${index * DELTA + INITIAL_DELAY}s` }, ...itemProps },
          child
        );
      }

      return null;
    });

    const containerProps = {
      className: styles.container,
      ref: refGrid,
    };

    return (
      <>
        {React.createElement('div', {
          dangerouslySetInnerHTML: { __html: this.createGridStyle() },
        })}
        {React.createElement(
          container.type,
          { style: { ...container.props, ...compProps }, ...containerProps },
          renderChildren
        )}
      </>
    );
  }
}

const ExportableLayout = React.forwardRef((props, ref) => <Masonry innerRef={ref} {...props} />);

// eslint-disable-next-line import/no-default-export
export default (ExportableLayout as unknown) as React.ComponentType<Props> & { resize: () => void };
