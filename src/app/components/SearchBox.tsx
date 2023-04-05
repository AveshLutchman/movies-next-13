import React from "react";
import {
  useSearchBox,
  type UseSearchBoxProps,
} from "react-instantsearch-hooks-web";

const SearchBox = (props: UseSearchBoxProps) => {
  const { query, refine } = useSearchBox(props);

  return (
    <div className="form-control mx-auto w-full max-w-xs">
      <label className="label">
        <span className="label-text">Search movie</span>
        {/* <span className="label-text-alt">Top Right label</span> */}
      </label>
      <input
        type="text"
        placeholder="Type here"
        className="input-bordered input w-full max-w-xs"
        value={query}
        onChange={(e)=>refine(e.target.value)}
      />
      {/* <label className="label">
        <span className="label-text-alt">Bottom Left label</span>
        <span className="label-text-alt">Bottom Right label</span>
      </label> */}
    </div>
  );
}

export default SearchBox