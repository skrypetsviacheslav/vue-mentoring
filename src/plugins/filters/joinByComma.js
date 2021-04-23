export function joinByComma(stringList) {
  if (stringList) {
    return stringList.join(" & ");
  }
  return stringList;
}
