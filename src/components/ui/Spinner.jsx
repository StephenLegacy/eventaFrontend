import './spinner.css';

/**
 * Reusable Loading Spinner Component
 * 
 * Features:
 * - Glass morphic design
 * - Responsive sizing
 * - Customizable via props
 * 
 * Props:
 * @param {string} [size='medium'] - Size of spinner (small|medium|large)
 * @param {string} [color='primary'] - Color variant (primary|white)
 */
export default function Spinner({ size = 'medium', color = 'primary' }) {
  return (
    <div className={`spinner-container glass-morphic ${size} ${color}`}>
      <div className="spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}