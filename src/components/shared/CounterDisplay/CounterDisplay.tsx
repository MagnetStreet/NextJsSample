const CounterDisplay: React.FC<{ counter: any }> = ({ counter }) => {
  const { count } = counter;

  return (
    <div>
      <p>Child 1 Counter: {count}</p>
    </div>
  );
};

export default CounterDisplay;
