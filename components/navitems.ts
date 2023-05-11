export interface NavItem {
    order: number;
    displayName: string;
    href: string;
}

function compare(a: NavItem, b: NavItem) {
  
    let comparison = 0;
    if (a.order > b.order) {
      comparison = 1;
    } else if (a.order < b.order) {
      comparison = -1;
    }
    return comparison;
  }

export const navItems: NavItem[] = [
    {
        order: 10,
        displayName: 'HOME',
        href: '/'
    },
    {
        order: 20,
        displayName: 'MENU',
        href: '/menu'
    },
    {
        order: 25,
        displayName: 'BESTELLEN',
        href: '/order'
    },
    {
        order: 30,
        displayName: 'ÜBER UNS',
        href: '/about'
    },
    {
        order: 40,
        displayName: 'KONTAKT',
        href: '/kontakt'
    }
].sort(compare);

export const linkColorOnWhite = '#111';
export const linkColorOnTransparent = 'white';
export const linkColorOnTransparentActive = '#00ffe6';
export const linkColorOnWhiteActive = '#E17E54';