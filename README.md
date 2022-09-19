# 🦠 Cal Poly COVID Stats

a re-visualized version of the data from https://coronavirus.calpoly.edu/dashboard

## an archival note

new builds for [the poly plague site][poly_plague] begin breaking only days after being released due to a change in the structure of downloaded data. a quarter system's pace and a broken spirit left me with little energy towards making a fix, however the repository was untouched as data continued to be downloaded and committed by the "GitHub Actions Bot".

each day of data downloaded by the bot can be found in [the commit history][commit_history].

### a timeline

#### 2022-09-18: repository archived

#### 2022-09-01: [dashboard api dissapears][calpoly_dashboard_api]

- [breaking deployment][github_action_break] ([prior deployment][github_action_break_prior])
- presumably removed when [dashboard][calpoly_dashboard] access became restricted

<img width="1034" alt="dashboard web address not found" src="https://user-images.githubusercontent.com/18134219/190957393-c6836b49-ac18-49eb-bf43-fd198a168257.png">

<img width="1065" alt="dashboard authorization required" src="https://user-images.githubusercontent.com/18134219/190958485-3d196bc7-e8ed-40d4-9f8f-378ae2877594.png">

#### 2022-01-13: [website build process broken][vercel_build_break]

- caused by an unexpected change to the dashboard data format
- [breaking commit][commit_breaking] ([prior commit][commit_breaking_prior])

<img width="1231" alt="vercel deploy showing a failed and successful build" src="https://user-images.githubusercontent.com/18134219/190941850-14841230-f58f-4468-8197-01356895f542.png">

<img width="1232" alt="type error when trying to build the site" src="https://user-images.githubusercontent.com/18134219/190942116-c2a66117-5a62-4e16-932d-74ce5c37a99c.png">

#### 2022-01-09: [website posted to r/calpoly][reddit_post]

#### 2022-01-08: [website posted to twitter][twitter_post]

[poly_plague]: https://poly-plague.vercel.app
[calpoly_dashboard]: https://coronavirus.calpoly.edu/dashboard
[calpoly_dashboard_api]: http://coviddashboard.calpoly.io
[commit_history]: https://github.com/e-zim/poly-plague/commits/main
[github_action_break]: https://github.com/e-zim/poly-plague/actions/runs/2973381913/jobs/4762930904
[github_action_break_prior]: https://github.com/e-zim/poly-plague/actions/runs/2972931456
[vercel_build_break]: https://vercel.com/zimboboys/poly-plague/Adwj4HDxxd7jG3sKS2BNu5RxhKdt
[commit_breaking]: https://github.com/e-zim/poly-plague/commit/da0cbd96694defb25f5f38d0eca5f22acb80d527
[commit_breaking_prior]: https://github.com/e-zim/poly-plague/commit/10ec24a439f3443dd1f279f172d2c910a9edf8ce
[reddit_post]: https://www.reddit.com/r/CalPoly/comments/s00kgc/i_made_a_better_covid_campus_dashboard/
[twitter_post]: https://twitter.com/_egzim/status/1480046969712091139
