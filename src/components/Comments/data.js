export const commentsData = {
  1: {
    ID: 1,
    comment: "comment 1",
    parentID: null,
    children: [4],
  },
  2: {
    ID: 2,
    comment: "comment 2",
    parentID: null,
    children: [],
  },
  3: {
    ID: 3,
    comment: "comment 3",
    parentID: null,
    children: [],
  },
  4: {
    ID: 4,
    comment: "comment 1 1",
    parentID: 1,
    children: [5],
  },
  5: {
    ID: 5,
    comment: "comment 1 1 1",
    parentID: 4,
    children: [],
  },
};
