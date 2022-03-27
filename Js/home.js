document.querySelector("#item")
    .addEventListener("wheel", event => {
            if (event.deltaY > 0) {
                event.target.scrollBy(300, 0)
            } else {
                console.log("scroll down")
                event.target.scrollBy(-300, 0)
            }
        }
    })