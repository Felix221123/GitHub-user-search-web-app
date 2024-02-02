$(document).ready(function () {

    $("input#search-btn").on("click", async function (event) {
        event.preventDefault();

        // Clear all containers
        $(".ball").css({
            "display": "none"
        });
        $(".search-results-container").css({
            "display": "none"
        });
        $(".error-container").css({
            "display": "none"
        });

        // Show the animation
        $(".ball").css({
            "display": "inline-block"
        });

        try {
            // getting the user's input
            const userNameSearch = $("input#search-user").val().trim();

            // getting my fetching running
            const userName = userNameSearch;
            const url = `https://api.github.com/users/${userName}`;
            const options = {
                method: "GET",
                headers: {
                    'X-GitHub-Api-Version': '2022-11-28'
                }
            };

            // function to fetch the data from the API
            async function getUserData() {
                const response = await fetch(url, options);
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            }

            //using an async function to make an appropriate fetch
            const myResults = await getUserData();

            // Format the date as "DD Mon YYYY"
            const formattedDate = new Date(myResults.created_at).toLocaleDateString('en-GB', {
                day: '2-digit',
                month: 'short',
                year: 'numeric',
            });

            // Map the fetched data to your user details type
            const userInfo = {
                userImg: myResults.avatar_url,
                userNickname: myResults.login,
                userName: myResults.name,
                userDateJoined: formattedDate,
                userBio: myResults.bio,
                userRepositories: myResults.public_repos,
                userFollowers: myResults.followers,
                userFollowing: myResults.following,
                userLocation: myResults.location,
                userWebsite: myResults.blog,
                userTwitter: myResults.twitter_username,
                userOrganizationName: myResults.company,
            };
            
            



            //using the data and pushing them back to the search results container
            const nullValues = "Not Available";
            const noBio = "This profile has no bio";

            if (userInfo.userImg) {
                $("#user-image").attr("src" , userInfo.userImg)
            }

            //user nickname
            if (userInfo.userName) {
                $("#user-nickname").text(userInfo.userName)
            } else {
                $("#user-nickname").text(nullValues)
            }

            //user Name
            if (userInfo.userNickname) {
                $("#username").text("@"+userInfo.userNickname)
                $("#username").attr("href","https://github.com/"+userInfo.userNickname)
            }

            //date users joined
            if (userInfo.userDateJoined) {
                $("#user-dateJoined").text("Joined " + userInfo.userDateJoined)
            }

            //users bio
            if (userInfo.userBio) {
                $("#users-bio").text(userInfo.userBio)
            } else {
                $("#users-bio").text(noBio)
            }

            //user repo count
            if (userInfo.userRepositories > 0) {
                $("#user-repos-count").text(userInfo.userRepositories)
            } else {
                $("#user-repos-count").text(0)
            }

            //user followers count
            if (userInfo.userFollowers > 0) {
                $("#user-followers-count").text(userInfo.userFollowers)
            } else {
                $("#user-followers-count").text(0)
            }

            //user following count
            if (userInfo.userFollowing > 0) {
                $("#user-following-count").text(userInfo.userFollowing)
            } else {
                $("#user-following-count").text(0)
            }

            //user location
            if (userInfo.userLocation) {
                $("#user-location").text(userInfo.userLocation)
                $("img#location-icon").css({
                    "filter": "brightness(0) invert(1)"
                });
            } else {
                $("#user-location").text(nullValues)
                $("img#location-icon").css({
                    "filter": "brightness(1) invert(0)"
                });
            }

            //user website
            if (userInfo.userWebsite) {
                $("#user-website").text(userInfo.userWebsite);
                $("#user-website").attr("href", userInfo.userWebsite)
                $("img#website-icon").css({
                    "filter": "brightness(0) invert(1)"
                });
            } else {
                $("#user-website").text(nullValues)
                $("img#website-icon").css({
                    "filter": "brightness(1) invert(0)"
                });
            }

            //user twitter
            if (userInfo.userTwitter) {
                $("#user-twitter").text(userInfo.userTwitter)
                $("#user-twitter").attr("href", "https://www.twitter.com/" + userInfo.userTwitter)
                $("img#twitter-icon").css({
                    "filter": "brightness(0) invert(1)"
                });
            } else {
                $("#user-twitter").text(nullValues)
                $("img#twitter-icon").css({
                    "filter": "brightness(1) invert(0)"
                });
            }

            //user organization
            if (userInfo.userOrganizationName) {
                $("#user-organization").text(userInfo.userOrganizationName)
                $("img#organization-icon").css({
                    "filter": "brightness(0) invert(1)"
                });
            } else {
                $("#user-organization").text(nullValues)
                $("img#organization-icon").css({
                    "filter": "brightness(1) invert(0)"
                });
            }

            //user bio
            if (userInfo.userImg) {
                $("#user-image").attr("src" , userInfo.userImg)
            }

            // Set a timeout for the animation duration (in milliseconds)
            var animationDuration = 1000; // Change this to match your animation duration in milliseconds
            setTimeout(function () {
                // Hide the animation after the timeout
                $(".ball").css({
                    "display": "none"
                });

                // Display the appropriate container based on success or error
                if (myResults) {
                    // Display the search results container
                    $(".search-results-container").show(850)
                } else {
                    
                    // Display the error container
                    $(".error-container").show(850)
                }
            }, animationDuration);

        } catch (error) {
            // Handle errors appropriately
            console.error('Error fetching data:', error);
            setTimeout(() => {
                $(".ball").css({
                    "display": "none"
                });
                // Display the error container
                $(".error-container").css({
                    "display": "flex"
                });
                
            }, 800);
            
            
        }
    });
});
