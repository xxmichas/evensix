import S from "@sanity/desk-tool/structure-builder";

export default () =>
  S.list()
    .title("Site")
    .items([
      S.documentListItem()
        .id("landingPageConfig")
        .schemaType("landingPage")
        .title("Landing page config"),
      ...S.documentTypeListItems().filter((el) => el.getId() !== "landingPage"),
    ]);
