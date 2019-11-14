import React from 'react';
import { NotificationContainer } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import styles from './Notification.module.css';

class Notification extends React.Component {

    // componentDidCatch(error) {
    //   const err = err.response.data.error
    //   // Feel free to log `error` in your error tracker as well.
    // }

    render() {
      return (
        <div className={styles.notif}>
          <NotificationContainer />
        </div>
      );
    }
}

export default Notification;