import React, {useEffect, useRef} from 'react';
import 'react-native';

// Note: test renderer must be required after react-native.
import {FlatList} from 'react-native';
import renderer from 'react-test-renderer';

function Test(): JSX.Element {
  const ref = useRef<FlatList>(null);

  useEffect(() => {
    ref.current?.scrollToEnd();
  }, []);

  return <FlatList ref={ref} data={[]} renderItem={undefined} />;
}

it('renders correctly', () => {
  renderer.create(<Test />);
});
