const wayf = require('./generics/kdecole-wayf');

module.exports = (url, account, username, password) => wayf({
    url,
    account,
    username,
    password,

    casUrl: 'cas.ent.auvergnerhonealpes.fr',
    idp: 'GRE-ATS'
});
