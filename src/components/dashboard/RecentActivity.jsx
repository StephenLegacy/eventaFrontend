import GlassCard from '../ui/GlassCard';
import './dashboard.css';

function RecentActivity({ userId, role }) {
  // In a real app, this would fetch actual activity data
  const demoActivities = [
    {
      id: 1,
      type: role === 'organizer' ? 'ticket-sale' : 'ticket-purchase',
      eventName: 'Tech Conference 2023',
      date: '2023-06-15T10:30:00Z',
      amount: role === 'organizer' ? 15 : 1
    },
    {
      id: 2,
      type: 'event-created',
      eventName: 'Music Festival',
      date: '2023-06-10T14:15:00Z'
    }
  ];

  return (
    <GlassCard className="recent-activity">
      <h3>Recent Activity</h3>
      <ul className="activity-list">
        {demoActivities.map(activity => (
          <li key={activity.id} className="activity-item">
            <div className="activity-icon">
              {activity.type === 'ticket-sale' && '💰'}
              {activity.type === 'ticket-purchase' && '🎟️'}
              {activity.type === 'event-created' && '✨'}
            </div>
            <div className="activity-details">
              <p>
                {activity.type === 'ticket-sale' && `${activity.amount} tickets sold for ${activity.eventName}`}
                {activity.type === 'ticket-purchase' && `Purchased ${activity.amount} ticket for ${activity.eventName}`}
                {activity.type === 'event-created' && `Created new event: ${activity.eventName}`}
              </p>
              <time className="activity-time">
                {new Date(activity.date).toLocaleDateString()}
              </time>
            </div>
          </li>
        ))}
      </ul>
    </GlassCard>
  );
}

export default RecentActivity;