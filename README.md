[![make.fun · u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee](https://make.fun/badge/u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee.svg)](https://make.fun/bounty/u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee?utm_source=github&utm_medium=readme&utm_campaign=u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee)
[![rank](https://make.fun/badge/u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee/0xrifai/makefun-vending-machine-pickup-line-20261124/rank.svg)](https://make.fun/bounty/u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee)
[![reward](https://make.fun/badge/u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee/0xrifai/makefun-vending-machine-pickup-line-20261124/reward.svg)](https://make.fun/bounty/u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee?utm_source=github&utm_medium=readme&utm_campaign=u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee)

# The Vending Machine Pickup Line

A make.fun entry for **One Line, One Minute: The Vending Machine Pickup Line Contest** — one pickup line, spoken by a vending machine to a passing human.

## The line

> I'm jammed, I'm humming, I'm flashing exact change only — and you're still the best thing that's dropped by today.

## How to run

```sh
npm start
```

That runs `main.ts` with Node and writes the line to `/output/entry.txt`. The program checks the line first: one line only, between 1 and 200 characters, no trailing newline, and not only whitespace.

## What the judge looks for

The judge compares lines two at a time, weighing the machine's own voice first — a line only a vending machine could say beats one any stranger could say. Next it looks for the machine's own world (slots, buttons, coils, snacks, the hum, exact change), then for a laugh whose twist lands in the last few words, then for something short enough to say in one breath, and finally for a line that charms instead of creeps. This entry leans on all five: the speaker is the machine itself, the setup is pure machine (jammed, humming, flashing exact change only), the joke turns on the word "dropped" in the final three words, and the compliment stays warm.

## Local check

Run the program twice and compare the output — both runs must produce the
same bytes:

```sh
npm start && sha256sum /output/entry.txt && cp /output/entry.txt /tmp/run1.txt
npm start && sha256sum /output/entry.txt && cmp /tmp/run1.txt /output/entry.txt
```

The file must hold exactly one line, 1–200 characters, with no trailing
newline. Verified locally on 2026-11-24: two runs, byte-identical output.
