import * as React from 'react';

import { uid } from './utils/uid';
import styles from './Masonry.module.css';

type Props = {
  columnWidth?: number;
  container?: React.ReactElement<any>;
  item?: React.ReactElement<any>;
  rowGap?: number;
  ref?: React.RefObject<React.ComponentType<Props> & { resize: () => void }>;
};

// eslint-disable-next-line import/no-default-export
export default class MasonryLayout extends React.Component<Props> {
  gridId: string | null = null;

  reposition: boolean = false;

  elements: HTMLElement[] = [];

  grid: null | HTMLElement = null;

  // eslint-disable-next-line
  static defaultProps = {
    columnWidth: 250,
    container: React.createElement('div'),
    item: React.createElement('article'),
    rowGap: 10,
  };

  constructor(props: Props) {
    super(props);

    this.gridId = uid();
  }

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

        itemRef.classList.add(styles.item);
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
    const { children, item = React.createElement('div'), container = React.createElement('div') } = this.props;

    const hasChildren: boolean = React.Children.count(children) > 0;

    if (!hasChildren) {
      return null;
    }

    const refItem = (n: HTMLElement): void => {
      this.getRef(n);
    };

    const refGrid = (node: HTMLElement): void => {
      this.grid = node;
    };

    const renderChildren = React.Children.map(children, (child: React.ReactNode) => {
      const itemProps = {
        key: uid(),
        ref: refItem,
      };

      if (item) {
        return React.createElement(item.type, itemProps, child);
      }

      return null;
    });

    const containerProps = {
      ...container.props,
      className: styles.container,
      ref: refGrid,
    };

    return (
      <>
        {React.createElement('div', {
          dangerouslySetInnerHTML: { __html: this.createGridStyle() },
        })}
        {React.createElement(container.type, containerProps, renderChildren)}
      </>
    );
  }
}
