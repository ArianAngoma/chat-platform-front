type DisplayType = 'flex' | 'block' | 'inline-block' | 'none';
type JustifyContentType =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly';
type AlignItemsType =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'baseline'
  | 'stretch';

export type PageContainerProps = Partial<{
  $display: DisplayType;
  $justifyContent: JustifyContentType;
  $alignItems: AlignItemsType;
}>;
