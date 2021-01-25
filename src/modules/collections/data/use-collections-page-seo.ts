export const useCollectionsPageSeo = () => {
  const title = 'Welcome to Collections';
  const metas = [
    {
      name: 'author',
      content: 'John Doe',
    },
    {
      name: 'description',
      content: 'Capture joyfull moments using our app.',
    },
    {
      name: 'og:title',
      content: 'Took apic - collections',
    },
    {
      name: 'og:image',
      content: '/logo192.png',
    },
  ];

  return {
    title,
    metas,
  };
};
