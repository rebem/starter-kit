import bem from './bem';

export function findTag(DOMNode, tag) {
    return DOMNode.querySelector(tag);
}

export function findBlock(DOMNode, block) {
    return DOMNode.querySelector('.' + block);
}

export function findElem(DOMNode, elem) {
    return DOMNode.querySelector('.' + bem.stringify(elem));
}

export function findParentElem(DOMNode, elem) {
    return DOMNode.closest('.' + bem.stringify(elem));
}
