import * as Tree from "../Model/Tree";

export var treeData: Tree.ITree =
    {
        name: "Mappe 1",
        content: [
            { name: "Mappe 1.1", content: [] },
            {
                name: "Mappe 1.2", content: [
                    { name: "Mappe 1.2.1", content: [] },
                    { name: "Mappe 1.2.2", content: [] },
                    { name: "Mappe 1.2.3", content: [
                        { name: "Mappe 1.2.3.1", content: [] }
                        ]
                     }
                        ]
            },
            { name: "Mappe 1.3", content: [] },
            {
                name: "Mappe 1.4", content: [
                    { name: "Mappe 1.4.1", content: [] },
                    { name: "Mappe 1.4.2", content: [] },
                    { name: "Mappe 1.4.3", content: [] }
                ]
            }
        ]


    };