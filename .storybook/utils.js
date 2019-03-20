import wInfoStyle from '../src/styles.json';
export function wInfo(text) {
  return {
    inline: true,
    source: false,
    styles: wInfoStyle,
    text: text
  };
}
