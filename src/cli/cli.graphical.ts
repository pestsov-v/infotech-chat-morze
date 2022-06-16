import color from "../core/enum/color.enum";

export default class CLIGraphical {
  edgeLine() {
    const witdh = process.stdout.columns;
    let line = "";
    for (let i = 0; i < witdh; i++) {
      line += "-";
    }
    console.log(color.purple, line);
  }

  middleLine() {
    const witdh = process.stdout.columns;
    let line = "";
    for (let i = 0; i < witdh; i++) {
      line += "-";
    }
    console.log(color.turquoise, line);
  }

  verticalSpace(lines: number = 1) {
    for (let i = 0; i < lines; i++) {
      console.log("");
    }
  }

  centered(str: string) {
    const witdh = process.stdout.columns;
    const leftPadding = Math.floor((witdh - str.length) / 2);
    let line = "";

    for (let i = 0; i < leftPadding; i++) {
      line += " ";
    }

    line += str;
    console.log(line);
  }
}
