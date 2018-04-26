
module.exports = {
    setActiveBlog: function (num) {
        let props = [{
            auth_id: "google-oauth2|103407766915288484540",
            blog_id: 26,
            claps: 6,
            content: "test test test test ",
            id: 2,
            image: "http://res.cloudinary.com/dbuqor9no/image/upload/v1523640143/i1hob5ifbmeqqi5nqxde.jpg",
            profile_image: "https://lh3.googleusercontent.com/-XdUIqdMkCWA/AAAAAAAAAAI/AAAAAAAAAAA/4252rscbv5M/photo.jpg",
            time_stamped: "2018-04-13T23:20:39.644Z",
            title: "cloudinary test",
            user_id: 2,
            username: "alex clark",
        }];
        let state = {
            idx: -1,
        }
        state.idx = props.findIndex((e) => e.blog_id === num)
        if (state.idx !== -1) {
            return state.idx
        }
        return 'get request'
    },
    addClaps() {
        let state = {
            claps: 0
        }

        return state.claps + 1 

    },
    handleToggle() {
        let state = {
            handleToggle: false
        }
        return !state.handleToggle

    }
}