module.exports = [
    {
        title: "Tổng quan",
        collapsable: false,
        children: [
            'gioi-thieu'
        ],
    }, {
        title: "Người Mua",
        collapsable: false,
        children: prefix('nguoi-mua', [
            'websites',
            'gio-hang',
            'don-hang',
            'guest-post',
            'backlinks'
        ]),
    }, {
        title: "Người Bán",
        collapsable: false,
        children: prefix('nguoi-ban', [
            'websites',
        ]),
    }
]

function prefix(prefix, children) {
    return children.map(child => `${prefix}/${child}`)
}
