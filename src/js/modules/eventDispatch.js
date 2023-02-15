function eventDispatch(name, detail = {}) {
    const event = new CustomEvent(name, { detail });
    event.initEvent(name, true, true);
    document.dispatchEvent(event);
}

export default eventDispatch;