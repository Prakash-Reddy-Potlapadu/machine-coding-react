// export let fileExplorerData = {
//   ID: "1",
//   name: "root",
//   isFolder: true,
//   children: [
//     {
//       ID: "2",
//       name: "public",
//       isFolder: true,
//       children: [],
//     },
//     {
//       ID: "3",
//       name: "src",
//       isFolder: true,
//       children: [
//         { ID: "5", name: "components", isFolder: true, children: [] },
//         { ID: "6", name: "App.js", isFolder: false, children: [] },
//       ],
//     },
//     {
//       ID: "4",
//       name: "package.json",
//       isFolder: false,
//       children: [],
//     },
//   ],
// };

export let explorerData = {
  1: {
    ID: 1,
    name: "root",
    isFolder: true,
    parentID: null,
    children: [2, 3, 6],
  },
  2: {
    ID: 2,
    name: "public",
    isFolder: true,
    parentID: 1,
    children: [],
  },
  3: {
    ID: 3,
    name: "src",
    isFolder: true,
    parentID: 1,
    children: [4, 5],
  },
  4: {
    ID: 4,
    name: "components",
    isFolder: true,
    parentID: 3,
    children: [],
  },
  5: {
    ID: 5,
    name: "App.js",
    isFolder: false,
    parentID: 3,
    children: [],
  },

  6: {
    ID: 6,
    name: "package.json",
    isFolder: false,
    parentID: 1,
    children: [],
  },
};
