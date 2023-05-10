import "./style.css";

export function TeamsTable() {
  const teams = [
    {
      id: "toze8j1610313009673",
      promotion: "html",
      members: "Nicolae Matei, HTML",
      name: "Web Presentation",
      url: "https://github.com/nmatei/web-intro-presentation"
    },
    {
      id: "ezabnf1630345987541",
      promotion: "css",
      members: "Nicolae",
      name: "Names",
      url: "https://github.com/nmatei/nmatei.github.io"
    }
  ];
  return (
    <form id="editForm" action="" method="post">
      <table id="list">
        <colgroup>
          <col span={1} style={{ width: "40px" }} />
          <col span={1} style={{ width: "125px" }} />
          <col span={1} />
          <col span={1} />
          <col span={1} />
          <col span={1} style={{ width: "80px" }} />
        </colgroup>
        <thead>
          <tr>
            <th>
              <input type="checkbox" name="selectAll" id="selectAll" />
            </th>
            <th>Promotion</th>
            <th>Members</th>
            <th>Project Name</th>
            <th>Project Url</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {teams.map(({ id, url, promotion, members, name }) => {
            let displayUrl = url;
            if (url.startsWith("https://")) {
              displayUrl = url.substring(8);
            }
            return (
              <tr key={id}>
                <td>
                  <input type="checkbox" name="selected" value={id} />
                </td>
                <td>{promotion}</td>
                <td>{members}</td>
                <td>{name}</td>
                <td>
                  <a href={url} target="_blank">
                    {displayUrl}
                  </a>
                </td>
                <td>
                  <a data-id={id} className="link-btn remove-btn">
                    ✖
                  </a>
                  <a data-id={id} className="link-btn edit-btn">
                    &#9998;
                  </a>
                </td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <td></td>
            <td>
              <input type="text" name="promotion" id="promotion" placeholder="Enter promotion" required />
            </td>
            <td>
              <input type="text" name="members" id="members" placeholder="Enter members" required />
            </td>
            <td>
              <input type="text" name="name" id="name" placeholder="Enter project name" required />
            </td>
            <td>
              <input type="text" name="url" id="url" placeholder="Enter project URL" required />
            </td>
            <td>
              <button type="submit">💾</button>
              <button type="reset">❌</button>
            </td>
          </tr>
        </tfoot>
      </table>
    </form>
  );
}
