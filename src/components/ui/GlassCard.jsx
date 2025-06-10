/**
 * Reusable glass morphic card component
 * Features:
 * - Consistent glass effect
 * - Customizable content
 * - Optional hover effects
 */
function GlassCard({ children, className = '', hoverEffect = true }) {
    return (
      <div className={`glass-card ${className} ${hoverEffect ? 'with-hover' : ''}`}>
        {children}
      </div>
    );
  }
  
  export default GlassCard;