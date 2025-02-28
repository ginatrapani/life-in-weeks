# Life in Weeks

This is an interactive map of my life, where each week I've been alive is a little box. The box's border color represents where I was living, the fill color what I was doing. Tap a box to see what I was doing where that week.

I made this to help myself see the bigger picture of the road I've walked.

Read more about [Life in Weeks at Wait But Why](https://waitbutwhy.com/2014/05/life-weeks.html).

This code was copied and adapted from [Buster Benson](https://busterbenson.com/life-in-weeks). It is a single webpage statically-rendered with [11ty](https://www.11ty.dev/) hosted on Netlify. It consists of two [data](src/_data/events.yml) [files](src/_data/colors.yml), [an introduction](src/content/index.md), and a [template](src/index.njk).

## 🚀 Setup

1. Install 11ty:
   ```sh
   npm install -g @11ty/eleventy
   ```
2. Clone and run locally:
```sh
    git clone https://github.com/ginatrapani/life-in-weeks.git
    cd life-in-weeks
    npx @11ty/eleventy --serve
```
3. Visit [http://localhost:8080/](http://localhost:8080/).

## ✨ Customize

- `src/content/` → Page content
- `src/index.njk` → Templates
- `src/assets/sass/` → Styles
- `src/assets/imgs/` → Site-wide images
- `src/static/` → Unprocessed assets
- `.eleventy.js` → Site settings

## Colophon

This page uses [Bootstrap](https://getbootstrap.com/) for layout and interaction, and a smidge of [jQuery](https://jquery.com/) to reflect the current week on the map.

The font is [Red Hat Display](https://fonts.google.com/specimen/Red+Hat+Display). Colors chosen via [Color Hunt](https://colorhunt.co/). Edited in [Zed](https://zed.dev).

## More Life in Weeks

There are several neat Life in Weeks examples and tools, including:

- [Weeksofyour.life](https://www.weeksofyour.life/): Make your own, completely browser-based
- [Life Calendar](https://lifecalendar.io): Make your own, with multiple layers
- [My Life in Days](https://days.sonnet.io/): Beautiful refactor, by days

🍯 “I always get to where I am going by walking away from where I have been.” – Winnie the Pooh
