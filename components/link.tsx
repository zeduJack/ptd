import Link from 'next/link';
import { useRouter } from 'next/router';

import { linkColorOnWhiteActive, linkColorOnTransparentActive, linkColorOnWhite, linkColorOnTransparent } from './navitems';

export default function NavLink({ href, name, backgroundWhite, isNavLink = true }) {
  const router = useRouter();
  // Must add passHref to Link
  let color = linkColorOnTransparent;
  if(backgroundWhite){
    color = linkColorOnWhite;
  }
  
  if (isNavLink && router.asPath === href) {
    if(backgroundWhite){
      color = linkColorOnWhiteActive;
    } else {
      color = linkColorOnTransparentActive;
    }
  }
  return (
    <Link href={href} passHref>
      <a style={{ textDecoration: 'none', color: color }}>{name}</a>
    </Link>
  )
}