const widthFirstTraversal = () => {
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

    const queue = [tree];
    while (queue.length !== 0) {
        const node = queue.pop();
        console.log(node.value);

        if (!!node.leftLeaf)
            queue.unshift(node.leftLeaf);
        if (!!node.rightLeaf)
            queue.unshift(node.rightLeaf);
    }
}