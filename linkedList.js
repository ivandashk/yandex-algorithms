const linkedList = () => {
    const linkedList = {
        value: "Node A",
        child: {
            value: "Node B",
            child: {
                value: "Node C",
                child: {
                    value: "Node D"
                }
            }
        }
    }

    console.log(JSON.parse(JSON.stringify(linkedList)));

    let stack = [];
    const fillStack = (node) => {
        const child = node.child;
        node.child = {};
        stack.push(node);
        if (!!child) fillStack(child);
    }

    fillStack(linkedList);
    stack = stack.reverse();

    let reversedLinkedList = null;
    let parentNode = null;
    for (let node of stack) {
        if (!reversedLinkedList) reversedLinkedList = node;
        else parentNode.child = node;
        
        parentNode = node;
    }

    console.log(reversedLinkedList);
}