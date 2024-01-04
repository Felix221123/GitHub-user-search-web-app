
// Declare and initialize darkThemeColors with the specified type
let darkThemeColors = {
    neatBlue: "#0079FF",
    pureWhite: "#FFFFFF",
    darkish: "#141D2F",
    darkbluish: "#1E2A47",
};


//aloowing the click event for themes
$(function () {
    
    // this function is for dark theme display settings
    function darkthemeDisplay() {
        $("body").css({
            "background-color" : darkThemeColors.darkish
        });

        $(".company-name").css({
            "color": darkThemeColors.pureWhite
        });
        $("#theme-clr-txt").text("light")
        $("#theme-clr-txt").css({
            "color": darkThemeColors.pureWhite
        });
        $("img#theme-icon").css({
            "color": darkThemeColors.pureWhite
        });
        $("img#theme-icon").attr("src", "starter-code/assets/icon-sun.svg");
        $(".search-container").css({
            "background-color": darkThemeColors.darkbluish
        });
        $("#search-user").css({
            "background-color": darkThemeColors.darkbluish,
            "color" : darkThemeColors.pureWhite
        });
        $(".search-results-container").css({
            "background-color": darkThemeColors.darkbluish
        });
        $("#user-nickname").css({
            "color": darkThemeColors.pureWhite
        });
        $("#user-dateJoined").css({
            "color": darkThemeColors.pureWhite
        });
        $("#users-bio").css({
            "color": darkThemeColors.pureWhite
        });
        $(".global-stats-container").css({
            "background-color": darkThemeColors.darkish
        });

        const allWhiteColors = [$("#user-repos"),
        $("#user-repos-count"),
        $("#user-followers"),
        $("#user-followers-count"),
        $("#user-following"),
        $("#user-following-count"),
        $("#user-location"),
        $("#user-website"),
        $("#user-twitter"),
        $("#user-organization")
        ]

        allWhiteColors.forEach(each => {
            each.css({
                "color": darkThemeColors.pureWhite
            });
            
        });

        // const svgImgColors = [
        //     $("img#location-icon"),
        //     $("img#website-icon"),
        //     $("img#twitter-icon"),
        //     $("img#organization-icon")
        // ]
        // svgImgColors.forEach(each => {
        //     each.css({
        //         "filter": "brightness(0) invert(1)"
        //     });
            
        // });

    }

    //this function is for white theme display settings
    function whitethemeDisplay() {
        $("body").css({
            "background-color" : ""
        });

        $(".company-name").css({
            "color": ""
        });
        $("#theme-clr-txt").text("dark")
        $("#theme-clr-txt").on(
            "mouseenter",
            function () {
                $(this).css({
                    "transition": "all 0.5s",
                    "color": "#2B3442"
                });
            }
        ).on(
            "mouseleave",
            function () {
                $(this).css({
                    "transition": "all 0.5s",
                    "color": ""
                });
            }
        );
        
        $("#theme-clr-txt").css({
            "color": ""
        });
        $("img#theme-icon").css({
            "color": ""
        });
        $("img#theme-icon").attr("src", "starter-code/assets/icon-moon.svg");
        $(".search-container").css({
            "background-color": ""
        });
        $("#search-user").css({
            "background-color": "",
            "color" : ""
        });
        $(".search-results-container").css({
            "background-color": ""
        });
        $("#user-nickname").css({
            "color": ""
        });
        $("#user-dateJoined").css({
            "color": ""
        });
        $("#users-bio").css({
            "color": ""
        });
        $(".global-stats-container").css({
            "background-color": ""
        });

        const allWhiteColors = [$("#user-repos"),
        $("#user-repos-count"),
        $("#user-followers"),
        $("#user-followers-count"),
        $("#user-following"),
        $("#user-following-count"),
        $("#user-location"),
        $("#user-website"),
        $("#user-twitter"),
        $("#user-organization")
        ]

        allWhiteColors.forEach(each => {
            each.css({
                "color": ""

            });
            
        });
        const svgImgColors = [
            $("img#location-icon"),
            $("img#website-icon"),
            $("img#twitter-icon"),
            $("img#organization-icon")
        ]
        svgImgColors.forEach(each => {
            each.css({
                "filter": "brightness(1) invert(0)"
            });
            
        });
    }

    // Function to check and set theme based on prefers-color-scheme
    function setThemeBasedOnPrefersColorScheme() {
        const isDarkModePreferred = window.matchMedia("(prefers-color-scheme: dark)").matches;

        if (isDarkModePreferred) {
            $("img#theme-icon").addClass("active");
            darkthemeDisplay();
        } else {
            $("img#theme-icon").removeClass("active");
            whitethemeDisplay();
        }
    }
    // Initial theme setup based on user's system preference
    setThemeBasedOnPrefersColorScheme();



    // Handle click events on a paragraph with ID "theme-clr-txt"
    $(".preferred-clr-theme-container").on('click', function () {
        const isDarkMode = $(".preferred-clr-theme-container").hasClass("active");
        console.log("the moon is clicked");
        

        if (!isDarkMode) {
            // Add the "active" class
            $(".preferred-clr-theme-container").addClass("active");
            
            // Apply dark mode styles
            darkthemeDisplay();
        }
        else {
            // Remove the "active" class
            $(".preferred-clr-theme-container").removeClass("active");

            //apply white theme color
            whitethemeDisplay()
        }
    });
});






