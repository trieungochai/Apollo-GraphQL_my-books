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
  },
};

module.exports = resolvers;

