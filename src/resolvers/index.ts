export const resolvers = {
  Query: {
    hello: () => ({
      msg: (): string => 'test',
    }),
  },
};

export default resolvers;
