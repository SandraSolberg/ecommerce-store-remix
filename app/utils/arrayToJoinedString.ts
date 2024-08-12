const arrayToJoinedString = (array: string[] | [] | null | undefined) =>
  Array.isArray(array) && array.length > 0
    ? array
        .map((a, index) => (index === array.length - 1 ? a : `${a} ,`))
        .join(' ')
    : '';

export default arrayToJoinedString;
