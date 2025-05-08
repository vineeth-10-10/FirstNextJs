import Card from '../ui/Card';
import classes from './MeetupItem.module.css';
import Link from 'next/link';

function MeetupItem(props) {
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
        </div>
        <div className={classes.actions}>
          <button><Link href={`/${props.id}`}>Show Details</Link></button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
