import wInfoStyle from './styles.json';

export function wInfo(text: string): any {
  return {
    inline: true,
    source: false,
    styles: wInfoStyle as object,
    text: text
  };
}
