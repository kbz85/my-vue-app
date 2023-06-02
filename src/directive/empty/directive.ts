function setEmptyDom(el, nodeId, nodeType) {
  if (el == null) {
    console.log("错误");
    return;
  }
  if (nodeId == null) {
    console.log("错误");
    return;
  }
  if (nodeType == null || nodeType == "") {
    nodeType = "empty";
  }

  const borderNodes = Array.from(el.children);
  borderNodes.forEach((item) => {
    if (item.id !== nodeId) item.style.opacity = "0";
    console.log(item);
  });

  const hasEmptyDom = document.getElementById(nodeId) as HTMLDivElement;
  if (hasEmptyDom == null) {
    // const currentEmptyType = emptyMap.get(nodeType)
    const emptyDom = document.createElement("div");
    emptyDom.id = nodeId;
    emptyDom.classList.add("is-empty");
    emptyDom.classList.add("empty-center");
    emptyDom.classList.add("empty-" + nodeType);
    el.appendChild(emptyDom);
  } else {
    hasEmptyDom.style.opacity = "1";
  }
}

function removeEmptyDom(el, nodeId) {
  const emptyDom = document.getElementById(nodeId) as HTMLDivElement;
  if (emptyDom) {
    emptyDom.style.opacity = "0";
    const borderNodes = Array.from(el);
    borderNodes.forEach((item) => {
      if (item.id !== nodeId) item.style.opacity = "1";
    });
  }
}

export default {
  install(app) {
    app.directive("el-empty", {
      mounted(el, binding) {
        el.style.position = "relative";
        const value = binding.value;
        const isNumberFlag: boolean =
          toString.call(binding.value) === `[object Number]`;
        
        let nodeId = "";
        const keys = Object.keys(binding.modifiers);
        if (keys && keys.length > 0) {
          nodeId += keys.join("-");
        }
        nodeId += "-" + binding.arg;

        if (!isNumberFlag || !Boolean(value)) {
          setEmptyDom(el, nodeId, binding.arg);
        } else {
          removeEmptyDom(el, nodeId);
        }
      },
    });
  },
};
