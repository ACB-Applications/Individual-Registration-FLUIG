function beforeStateEntry(sequenceId) {
  if (sequenceId == 5) {
    var attachments = hAPI.listAttachments();
    var hasAttachment = false;

    for (var i = 0; i < attachments.size(); i++) {
      var attachment = attachments.get(i);

      if (
        attachment.getDocumentDescription().indexOf(".pdf") > -1 ||
        attachment.getDocumentDescription().indexOf(".png") > -1 ||
        attachment.getDocumentDescription().indexOf(".jpeg") > -1 ||
        attachment.getDocumentDescription().indexOf(".jpg") > -1
      ) {
        hasAttachment = true;
      }
    }

    if (!hasAttachment) {
      throw "É obrigatório anexar arquivo de imagem referente ao cadastro!";
    }
  }
}
