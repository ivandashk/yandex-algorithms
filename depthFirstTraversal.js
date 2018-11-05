const depthFirstTraversal = () => {
    const tree = {
        value: "Node A",
        leftLeaf: {
            value: "Node B",
            leftLeaf: {
                value: "Node D"
            },
            rightLeaf: {
                value: "Node E"
            }
        },
        rightLeaf: {
            value: "Node C",
            leftLeaf: {
                value: "Node F",
                rightLeaf: {
                    value: "Node H",
                },
            },
            rightLeaf: {
                value: "Node G"
            }
        }
    }

    console.log(tree);

    const printDeep = (node) => {
        console.log(node.value);

        if (!!node.leftLeaf)
            printDeep(node.leftLeaf);
        if (!!node.rightLeaf)
            printDeep(node.rightLeaf);
    }

    printDeep(tree);
}