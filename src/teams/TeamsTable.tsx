import React from "react";
import "./style.css";
import { getTeamsRequest } from "./middleware";

type Team = { id: string; name: string; promotion: string; url: string; members: string };
type Props = {
  loading: boolean;
  teams: Team[];
};

export function TeamsTable(props: Props) {
  // if (props.loading && props.teams.length == 0) {
  //   return (
  //     <div style={{ minHeight: "100px" }} className="loading-mask">
  //       Loading...
  //     </div>
  //   );
  // }
  return (
    <form id="editForm" action="" method="post" className={props.loading ? "loading-mask" : ""}>
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
          {props.teams.map(({ id, url, promotion, members, name }) => {
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

type WrapperProps = {};
type State = {
  loading: boolean;
  teams: Team[];
};

export class TeamsTableWrapper extends React.Component<WrapperProps, State> {
  constructor(props: WrapperProps) {
    super(props);
    console.info("constructor props", props);
    this.state = {
      loading: true,
      teams: []
    };
  }

  async componentDidMount(): Promise<void> {
    const teams = await getTeamsRequest();

    this.setState({
      loading: false,
      teams: teams
    });
  }

  render() {
    console.info("render");
    return <TeamsTable teams={this.state.teams} loading={this.state.loading} />;
  }
}
