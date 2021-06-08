import { useState } from 'react';

function useVisibilityToggle(component, visibility = true) {
  const [visible, setVisible] = useState(() => visibility);
  return [visible ? component : null, () => setVisible((v) => !v)]
}

export default useVisibilityToggle
