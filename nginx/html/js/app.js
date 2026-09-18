document.addEventListener("DOMContentLoaded", () => {

    /*
     * Update the browser title when the page becomes visible.
     */

    const originalTitle = document.title;

    document.addEventListener("visibilitychange", () => {

        if (document.hidden) {
            document.title = "DevOps Lab";
        } else {
            document.title = originalTitle;
        }

    });


    /*
     * Smooth navigation fallback for older browsers.
     */

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", event => {

            const targetId = link.getAttribute("href");

            if (targetId === "#") {
                return;
            }

            const target = document.querySelector(targetId);

            if (!target) {
                return;
            }

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

    });


    /*
     * Simple lab status indicator.
     *
     */

    const statusText = document.querySelector(".status span:last-child");

    if (statusText) {
        statusText.textContent = "LAB ONLINE";
    }

});
