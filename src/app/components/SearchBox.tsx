import { useDebouncedValue } from '@mantine/hooks';
import { useEffect, useState } from "react";
import {
  useSearchBox,
  type UseSearchBoxProps,
} from "react-instantsearch-hooks-web";

const SearchBox = (props: UseSearchBoxProps) => {
  const { refine } = useSearchBox(props);
  const [value, setValue] = useState('');
  const [debounced] = useDebouncedValue(value, 300);

  useEffect(() => {
    refine(debounced)
  }, [debounced, refine])

  return (
    <div className="form-control mx-auto w-full max-w-xs">
      <label className="label">
        <span className="label-text">Search movie</span>
      </label>
      <input
        type="text"
        placeholder="Type here"
        className="input-bordered input w-full max-w-xs"
        value={value}
        onChange={(e)=>setValue(e.target.value)}
      />
    </div>
  );
}

export default SearchBox