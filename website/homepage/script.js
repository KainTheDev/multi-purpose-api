const hyperlink = (document.getElementsByClassName('hyperlink'))[0]
hyperlink.addEventListener('mousedown', () => {
    open(hyperlink.id)
})