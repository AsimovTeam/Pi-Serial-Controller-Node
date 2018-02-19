function notJson(data) {
    return JSON.stringify({
        error: 1,
        message: `"${data}" is not Json`
    })
}

module.exports = {
    notJson: notJson
}