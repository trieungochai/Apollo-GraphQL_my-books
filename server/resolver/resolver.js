const resolvers = {
  Query: {
    books: () => [
      {
        id: 1,
        title: "Brave New World",
        genre: "Dystopian fiction",
      },
      {
        id: 2,
        title: "Travels with Charley: In Search of America",
        genre: "Travelogue",
      },
    ],
    authors: () => [
      {
        id: 1,
        name: "Aldous Huxley",
        born: 1894,
      },
      {
        id: 2,
        name: "Yasunari Kawabata",
        born: 1899,
      },
      {
        id: 3,
        name: "Vladimir Vladimirovich Nabokov",
        born: 1899,
      },
    ],
  },
};

module.exports = resolvers;
