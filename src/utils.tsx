import wInfoStyle from './styles.json';

export function wInfo(text: string): any {
  return {
    inline: true,
    source: false,
    styles: wInfoStyle as object,
    text: text,
  };
}

export function classnames(classes: Record<string, boolean>) {
  return Object.entries(classes)
    .filter(([key, value]) => value === true)
    .map(([key, value]) => key)
    .join(' ');
}
