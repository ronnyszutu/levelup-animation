export function drag(node, params) {
    // node.style.background = "red";
    node.addEventListener("mousedown", () => console.log("click"));
    return {
        destroy() {
            node.removeEventListener("mousedown", () => console.log("click"));
        }
    }
}