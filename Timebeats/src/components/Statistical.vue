<template>
  <div>
    <vue-headful title="Thống kê" />
    <div class="main-content horizontal-content">
      <div class="container">
        <div class="breadcrumb-header justify-content-between">
          <div class="my-auto">
            <div class="d-flex">
              <h4 class="content-title mb-0 my-auto">Thống kê thu nhập</h4>
            </div>
          </div>
        </div>
        <div class="row row-sm">
          <div class="col-sm-12">
            <div class="card">
              <div class="card-body">
                <div class="tabs-menu">
                  <ul class="nav nav-tabs profile navtab-custom panel-tabs">
                    <li>
                      <a href="#resource" data-toggle="tab" aria-expanded="false" class="active">
                        <span class="visible-xs">
                          <i class="fas fa-user"></i>
                        </span>
                        <span class="hidden-xs">CÁ NHÂN</span>
                      </a>
                    </li>
                    <li>
                      <a href="#feedback" data-toggle="tab" aria-expanded="false">
                        <span class="visible-xs">
                          <i class="fas fa-users"></i>
                        </span>
                        <span class="hidden-xs">NHÓM</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="tab-content border-left border-bottom border-right border-top-0 p-4">
                  <div id="resource" class="tab-pane active">
                    <div class="panel panel-primary tabs-style-1">
                      <div class="tab-menu-heading">
                        <div class="tabs-menu1">
                          <ul class="nav panel-tabs main-nav-line">
                            <li class="nav-item">
                              <a
                                href="https://timebeats.com/dashboard/personal-income?type=mission"
                                class="nav-link active"
                              >Nhiệm vụ</a>
                            </li>
                            <li class="nav-item">
                              <a href="#" class="nav-link">
                                Chiến dịch
                                <img
                                  src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyMS4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCA0NzIgMTE4IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0NzIgMTE4OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPg0KCS5zdDB7ZmlsbDp1cmwoI1NWR0lEXzFfKTt9DQoJLnN0MXtlbmFibGUtYmFja2dyb3VuZDpuZXcgICAgO30NCgkuc3Qye2ZpbGw6I0ZGRkZGRjt9DQo8L3N0eWxlPg0KPGxpbmVhckdyYWRpZW50IGlkPSJTVkdJRF8xXyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSI3LjM3NjQiIHkxPSI1OS4zNjM3IiB4Mj0iNDY4LjY3OCIgeTI9IjU5LjM2MzciPg0KCTxzdG9wICBvZmZzZXQ9IjguNTA4NjYzZS0wNCIgc3R5bGU9InN0b3AtY29sb3I6I0ZGMDAwMCIvPg0KCTxzdG9wICBvZmZzZXQ9IjEiIHN0eWxlPSJzdG9wLWNvbG9yOiNDQzAwMDAiLz4NCjwvbGluZWFyR3JhZGllbnQ+DQo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDU4LjcsMTdIMjUxLjFMMjM4LDRsLTEzLDEzSDE3LjRjLTUuNSwwLTEwLDQuNS0xMCwxMHY3Ny43YzAsNS41LDQuNSwxMCwxMCwxMGg0NDEuNGM1LjUsMCwxMC00LjUsOS45LTEwVjI3DQoJQzQ2OC43LDIxLjUsNDY0LjIsMTcsNDU4LjcsMTd6Ii8+DQo8ZyBjbGFzcz0ic3QxIj4NCgk8cGF0aCBjbGFzcz0ic3QyIiBkPSJNNDkuMSw4MS40Yy0zLjQtMi02LjEtNC44LTcuOS04LjVjLTEuOC0zLjctMi44LTgtMi44LTEyLjljMC00LjksMC45LTkuMiwyLjgtMTIuOWMxLjgtMy43LDQuNS02LjUsNy45LTguNA0KCQljMy40LTIsNy40LTMsMTItM2MzLDAsNS43LDAuNCw4LjMsMS4zYzIuNiwwLjksNC45LDIuMSw2LjksMy44YzAuNiwwLjQsMSwwLjksMS4yLDEuNGMwLjIsMC41LDAuMywxLjEsMC4zLDEuOA0KCQljMCwxLTAuMywxLjgtMC44LDIuNXMtMS4yLDEtMiwxYy0wLjksMC0xLjgtMC4zLTIuOC0wLjljLTEuOS0xLjQtMy43LTIuNC01LjQtM2MtMS43LTAuNi0zLjUtMC44LTUuNS0wLjhjLTQuNywwLTguMiwxLjUtMTAuNiw0LjQNCgkJYy0yLjQsMi45LTMuNiw3LjItMy42LDEyLjhjMCw1LjcsMS4yLDEwLDMuNiwxMi45YzIuNCwyLjksNS45LDQuNCwxMC42LDQuNGMxLjksMCwzLjctMC4zLDUuMy0wLjljMS42LTAuNiwzLjUtMS42LDUuNS0zDQoJCWMwLjQtMC4zLDAuOS0wLjUsMS4zLTAuN2MwLjQtMC4yLDAuOS0wLjMsMS40LTAuM2MwLjgsMCwxLjQsMC4zLDIsMXMwLjgsMS41LDAuOCwyLjVjMCwwLjctMC4xLDEuMy0wLjMsMS44DQoJCWMtMC4yLDAuNS0wLjYsMS0xLjIsMS40Yy0yLDEuNy00LjMsMi45LTYuOSwzLjhjLTIuNiwwLjktNS40LDEuMy04LjMsMS4zQzU2LjUsODQuNCw1Mi41LDgzLjQsNDkuMSw4MS40eiIvPg0KCTxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik05MC4zLDgyLjNjLTIuNS0xLjQtNC41LTMuNC01LjktNmMtMS40LTIuNi0yLjEtNS42LTIuMS05LjFjMC0zLjUsMC43LTYuNSwyLjEtOWMxLjQtMi42LDMuNC00LjYsNS45LTYNCgkJYzIuNS0xLjQsNS41LTIuMSw4LjgtMi4xczYuMywwLjcsOC44LDIuMWMyLjUsMS40LDQuNSwzLjQsNS45LDZjMS40LDIuNiwyLjEsNS42LDIuMSw5YzAsMy41LTAuNyw2LjUtMi4xLDkuMQ0KCQljLTEuNCwyLjYtMy4zLDQuNi01LjksNmMtMi41LDEuNC01LjUsMi4xLTguOCwyLjFTOTIuOCw4My42LDkwLjMsODIuM3ogTTEwNS4zLDc1LjFjMS40LTEuOCwyLjItNC40LDIuMi03LjkNCgkJYzAtMy41LTAuNy02LjEtMi4yLTcuOWMtMS40LTEuOC0zLjUtMi43LTYuMi0yLjdzLTQuOCwwLjktNi4yLDIuN2MtMS41LDEuOC0yLjIsNC41LTIuMiw3LjljMCwzLjUsMC43LDYuMSwyLjIsNy45DQoJCWMxLjQsMS44LDMuNSwyLjcsNi4yLDIuN0MxMDEuOCw3Ny44LDEwMy45LDc2LjksMTA1LjMsNzUuMXoiLz4NCgk8cGF0aCBjbGFzcz0ic3QyIiBkPSJNMTcwLjEsNTMuM2MxLjksMi4xLDIuOSw1LjYsMi45LDEwLjN2MTYuNWMwLDEuMy0wLjQsMi4zLTEuMiwzYy0wLjgsMC43LTEuOCwxLTMuMSwxYy0xLjIsMC0yLjItMC4zLTMtMQ0KCQljLTAuOC0wLjctMS4yLTEuNy0xLjItM1Y2My42YzAtMi41LTAuNC00LjItMS4zLTUuM2MtMC45LTEuMS0yLjItMS42LTQtMS42Yy0yLjIsMC0zLjksMC44LTUuMiwyLjNjLTEuMywxLjUtMiwzLjYtMiw2LjJ2MTUNCgkJYzAsMS4zLTAuNCwyLjMtMS4yLDNjLTAuOCwwLjctMS44LDEtMywxcy0yLjItMC4zLTMtMWMtMC44LTAuNy0xLjItMS43LTEuMi0zVjYzLjZjMC0yLjUtMC40LTQuMi0xLjMtNS4zYy0wLjktMS4xLTIuMi0xLjYtNC0xLjYNCgkJYy0yLjIsMC0zLjksMC44LTUuMiwyLjNjLTEuMywxLjUtMS45LDMuNi0xLjksNi4ydjE1YzAsMS4zLTAuNCwyLjMtMS4yLDNjLTAuOCwwLjctMS44LDEtMywxYy0xLjIsMC0yLjItMC4zLTMtMQ0KCQljLTAuOC0wLjctMS4yLTEuNy0xLjItM3YtMjZjMC0xLjMsMC40LTIuMiwxLjItMi45YzAuOC0wLjcsMS44LTEsMy0xYzEuMiwwLDIuMSwwLjMsMi45LDFjMC43LDAuNywxLjEsMS42LDEuMSwyLjh2MS42DQoJCWMxLTEuOCwyLjQtMy4yLDQuMS00LjFjMS43LTAuOSwzLjctMS40LDYtMS40YzQuOSwwLDguMiwyLjEsOS45LDYuMmMxLTEuOSwyLjQtMy40LDQuNC00LjVjMS45LTEuMSw0LjEtMS43LDYuNS0xLjcNCgkJQzE2NS40LDUwLjEsMTY4LjIsNTEuMiwxNzAuMSw1My4zeiIvPg0KCTxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik0xODIsNDNjLTAuOS0wLjgtMS4zLTEuOS0xLjMtMy4zYzAtMS4zLDAuNC0yLjQsMS4zLTMuMmMwLjktMC44LDIuMS0xLjIsMy42LTEuMmMxLjUsMCwyLjcsMC40LDMuNiwxLjINCgkJYzAuOSwwLjgsMS40LDEuOSwxLjQsMy4yYzAsMS4zLTAuNCwyLjQtMS4zLDMuM2MtMC45LDAuOC0yLjEsMS4yLTMuNiwxLjJDMTg0LjEsNDQuMywxODIuOSw0My44LDE4Miw0M3ogTTE4Mi43LDgzLjINCgkJYy0wLjgtMC43LTEuMi0xLjctMS4yLTN2LTI2YzAtMS4zLDAuNC0yLjMsMS4yLTNjMC44LTAuNywxLjgtMSwzLTFjMS4yLDAsMi4yLDAuMywzLDFjMC44LDAuNywxLjIsMS43LDEuMiwzdjI2DQoJCWMwLDEuMy0wLjQsMi4zLTEuMiwzYy0wLjgsMC43LTEuOCwxLTMsMUMxODQuNSw4NC4yLDE4My41LDgzLjksMTgyLjcsODMuMnoiLz4NCgk8cGF0aCBjbGFzcz0ic3QyIiBkPSJNMjI2LjUsNTMuNWMxLjksMi4yLDIuOSw1LjYsMi45LDEwLjJ2MTYuNWMwLDEuMy0wLjQsMi4yLTEuMSwzcy0xLjgsMS4xLTMuMSwxLjFjLTEuMywwLTIuMy0wLjQtMy4xLTEuMQ0KCQljLTAuOC0wLjctMS4xLTEuNy0xLjEtM1Y2NC4xYzAtMi42LTAuNS00LjQtMS40LTUuNmMtMS0xLjItMi41LTEuNy00LjUtMS43Yy0yLjQsMC00LjQsMC44LTUuOCwyLjNjLTEuNSwxLjUtMi4yLDMuNi0yLjIsNi4xdjE1DQoJCWMwLDEuMy0wLjQsMi4yLTEuMSwzYy0wLjgsMC43LTEuOCwxLjEtMy4xLDEuMWMtMS4zLDAtMi4zLTAuNC0zLjEtMS4xcy0xLjEtMS43LTEuMS0zdi0yNmMwLTEuMiwwLjQtMi4xLDEuMS0yLjgNCgkJYzAuOC0wLjcsMS44LTEuMSwzLjEtMS4xYzEuMiwwLDIuMSwwLjMsMi45LDFjMC43LDAuNywxLjEsMS42LDEuMSwyLjd2MS44YzEuMS0xLjgsMi42LTMuMiw0LjUtNC4yYzEuOS0xLDQtMS41LDYuNC0xLjUNCgkJQzIyMS42LDUwLjEsMjI0LjYsNTEuMiwyMjYuNSw1My41eiIvPg0KCTxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik0yNjguOCw1MS4zYzAuOCwwLjcsMS4xLDEuNywxLjEsMi45djI2LjZjMCw1LjItMS40LDkuMS00LjMsMTEuN2MtMi45LDIuNi03LjEsNC0xMi43LDQNCgkJYy00LjksMC05LTAuOS0xMi4yLTIuOGMtMS43LTEtMi41LTIuMi0yLjUtMy42YzAtMSwwLjItMS44LDAuNy0yLjRjMC41LTAuNiwxLjEtMC45LDEuOC0wLjljMC40LDAsMC45LDAuMSwxLjUsMC4zDQoJCWMwLjYsMC4yLDEuMiwwLjQsMS44LDAuN2MxLjYsMC43LDMuMSwxLjIsNC4zLDEuNWMxLjMsMC40LDIuNywwLjUsNC40LDAuNWM1LjksMCw4LjgtMi45LDguOC04LjZ2LTQuM2MtMSwxLjgtMi40LDMuMy00LjMsNC4zDQoJCWMtMS45LDEtNCwxLjUtNi41LDEuNWMtMi45LDAtNS40LTAuNy03LjYtMi4xYy0yLjItMS40LTQtMy4zLTUuMi01LjhjLTEuMy0yLjUtMS45LTUuMy0xLjktOC41czAuNi02LjEsMS44LTguNg0KCQljMS4yLTIuNSwzLTQuNCw1LjItNS44YzIuMi0xLjQsNC44LTIuMSw3LjctMi4xYzIuNCwwLDQuNiwwLjUsNi41LDEuNWMxLjksMSwzLjMsMi40LDQuMyw0LjN2LTEuN2MwLTEuMiwwLjQtMi4xLDEuMS0yLjgNCgkJYzAuOC0wLjcsMS44LTEuMSwzLTEuMUMyNjcsNTAuMiwyNjgsNTAuNiwyNjguOCw1MS4zeiBNMjU5LjMsNzMuN2MxLjUtMS43LDIuMy00LjEsMi4zLTcuMmMwLTMuMS0wLjgtNS41LTIuMy03LjMNCgkJYy0xLjUtMS43LTMuNi0yLjYtNi4zLTIuNmMtMi42LDAtNC43LDAuOS02LjMsMi42Yy0xLjUsMS43LTIuMyw0LjItMi4zLDcuM2MwLDMsMC44LDUuNCwyLjMsNy4yYzEuNSwxLjcsMy42LDIuNiw2LjMsMi42DQoJCUMyNTUuOCw3Ni4zLDI1Ny44LDc1LjUsMjU5LjMsNzMuN3oiLz4NCgk8cGF0aCBjbGFzcz0ic3QyIiBkPSJNMjk2LjksODEuNGMtMS40LTAuOS0yLjItMi4xLTIuMi0zLjZjMC0wLjksMC4yLTEuNiwwLjctMi4yYzAuNS0wLjYsMS4xLTAuOCwxLjgtMC44YzAuOCwwLDEuOCwwLjQsMy4yLDEuMQ0KCQljMS40LDAuNywyLjcsMS4yLDMuOSwxLjVjMS4yLDAuNCwyLjcsMC41LDQuNSwwLjVjMS45LDAsMy40LTAuMyw0LjQtMC45YzEuMS0wLjYsMS42LTEuNSwxLjYtMi42YzAtMC44LTAuMi0xLjQtMC42LTEuOA0KCQljLTAuNC0wLjQtMS4yLTAuOS0yLjMtMS4yYy0xLjEtMC40LTIuOC0wLjgtNS0xLjNjLTQtMC44LTYuOS0yLTguNi0zLjRjLTEuNy0xLjUtMi42LTMuNS0yLjYtNi4xYzAtMiwwLjYtMy44LDEuNy01LjMNCgkJYzEuMi0xLjYsMi44LTIuOCw0LjgtMy43YzItMC45LDQuNC0xLjMsNy0xLjNjMS45LDAsMy43LDAuMiw1LjQsMC43czMuMywxLjIsNC43LDIuMWMxLjQsMC45LDIuMiwyLjEsMi4yLDMuNg0KCQljMCwwLjktMC4yLDEuNi0wLjcsMi4zYy0wLjUsMC42LTEuMSwwLjktMS44LDAuOWMtMC41LDAtMS0wLjEtMS40LTAuM2MtMC41LTAuMi0xLjEtMC41LTEuOC0wLjljLTEuMy0wLjctMi40LTEuMi0zLjQtMS41DQoJCWMtMC45LTAuMy0yLjEtMC41LTMuNS0wLjVjLTEuNywwLTMsMC4zLTMuOSwxYy0xLDAuNy0xLjQsMS42LTEuNCwyLjhjMCwxLjEsMC41LDIsMS41LDIuNmMxLDAuNiwyLjksMS4yLDUuNywxLjcNCgkJYzMsMC42LDUuNCwxLjMsNy4xLDIuMmMxLjcsMC44LDIuOSwxLjgsMy43LDNzMS4xLDIuOCwxLjEsNC42YzAsMy0xLjMsNS41LTMuOCw3LjNjLTIuNSwxLjgtNS45LDIuOC0xMC4xLDIuOA0KCQlDMzAzLjksODQuMywyOTkuOSw4My40LDI5Ni45LDgxLjR6Ii8+DQoJPHBhdGggY2xhc3M9InN0MiIgZD0iTTMzNS42LDgyLjNjLTIuNS0xLjQtNC41LTMuNC01LjktNmMtMS40LTIuNi0yLjEtNS42LTIuMS05LjFjMC0zLjUsMC43LTYuNSwyLjEtOWMxLjQtMi42LDMuNC00LjYsNS45LTYNCgkJYzIuNS0xLjQsNS41LTIuMSw4LjgtMi4xczYuMywwLjcsOC44LDIuMWMyLjUsMS40LDQuNSwzLjQsNS45LDZjMS40LDIuNiwyLjEsNS42LDIuMSw5YzAsMy41LTAuNyw2LjUtMi4xLDkuMQ0KCQljLTEuNCwyLjYtMy4zLDQuNi01LjksNmMtMi41LDEuNC01LjUsMi4xLTguOCwyLjFTMzM4LjIsODMuNiwzMzUuNiw4Mi4zeiBNMzUwLjcsNzUuMWMxLjQtMS44LDIuMi00LjQsMi4yLTcuOQ0KCQljMC0zLjUtMC43LTYuMS0yLjItNy45Yy0xLjQtMS44LTMuNS0yLjctNi4yLTIuN3MtNC44LDAuOS02LjIsMi43Yy0xLjUsMS44LTIuMiw0LjUtMi4yLDcuOWMwLDMuNSwwLjcsNi4xLDIuMiw3LjkNCgkJYzEuNCwxLjgsMy41LDIuNyw2LjIsMi43QzM0Ny4xLDc3LjgsMzQ5LjIsNzYuOSwzNTAuNyw3NS4xeiIvPg0KCTxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik0zNzQuMyw4Mi4zYy0yLjUtMS40LTQuNS0zLjQtNS45LTZjLTEuNC0yLjYtMi4xLTUuNi0yLjEtOS4xYzAtMy41LDAuNy02LjUsMi4xLTljMS40LTIuNiwzLjQtNC42LDUuOS02DQoJCWMyLjUtMS40LDUuNS0yLjEsOC44LTIuMXM2LjMsMC43LDguOCwyLjFjMi41LDEuNCw0LjUsMy40LDUuOSw2YzEuNCwyLjYsMi4xLDUuNiwyLjEsOWMwLDMuNS0wLjcsNi41LTIuMSw5LjENCgkJYy0xLjQsMi42LTMuMyw0LjYtNS45LDZjLTIuNSwxLjQtNS41LDIuMS04LjgsMi4xUzM3Ni44LDgzLjYsMzc0LjMsODIuM3ogTTM4OS4zLDc1LjFjMS40LTEuOCwyLjItNC40LDIuMi03LjkNCgkJYzAtMy41LTAuNy02LjEtMi4yLTcuOWMtMS40LTEuOC0zLjUtMi43LTYuMi0yLjdzLTQuOCwwLjktNi4yLDIuN2MtMS41LDEuOC0yLjIsNC41LTIuMiw3LjljMCwzLjUsMC43LDYuMSwyLjIsNy45DQoJCWMxLjQsMS44LDMuNSwyLjcsNi4yLDIuN0MzODUuOCw3Ny44LDM4Ny45LDc2LjksMzg5LjMsNzUuMXoiLz4NCgk8cGF0aCBjbGFzcz0ic3QyIiBkPSJNNDM0LjcsNTMuNWMxLjksMi4yLDIuOSw1LjYsMi45LDEwLjJ2MTYuNWMwLDEuMy0wLjQsMi4yLTEuMSwzYy0wLjcsMC43LTEuOCwxLjEtMy4xLDEuMQ0KCQljLTEuMywwLTIuMy0wLjQtMy4xLTEuMWMtMC44LTAuNy0xLjEtMS43LTEuMS0zVjY0LjFjMC0yLjYtMC41LTQuNC0xLjQtNS42Yy0xLTEuMi0yLjUtMS43LTQuNS0xLjdjLTIuNCwwLTQuNCwwLjgtNS44LDIuMw0KCQljLTEuNSwxLjUtMi4yLDMuNi0yLjIsNi4xdjE1YzAsMS4zLTAuNCwyLjItMS4xLDNzLTEuOCwxLjEtMy4xLDEuMWMtMS4zLDAtMi4zLTAuNC0zLjEtMS4xYy0wLjctMC43LTEuMS0xLjctMS4xLTN2LTI2DQoJCWMwLTEuMiwwLjQtMi4xLDEuMS0yLjhjMC44LTAuNywxLjgtMS4xLDMuMS0xLjFjMS4yLDAsMi4xLDAuMywyLjksMWMwLjcsMC43LDEuMSwxLjYsMS4xLDIuN3YxLjhjMS4xLTEuOCwyLjYtMy4yLDQuNS00LjINCgkJYzEuOS0xLDQtMS41LDYuNC0xLjVDNDI5LjksNTAuMSw0MzIuOCw1MS4yLDQzNC43LDUzLjV6Ii8+DQo8L2c+DQo8L3N2Zz4NCg=="
                                  class="ml-2"
                                  style="max-height: 16px; position: absolute; width: 58px; top: 30px; left: 14px;"
                                />
                              </a>
                            </li>
                            <li class="nav-item">
                              <a href="#" class="nav-link">
                                Hoàn tiền
                                <img
                                  src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyMS4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCA0NzIgMTE4IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0NzIgMTE4OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPg0KCS5zdDB7ZmlsbDp1cmwoI1NWR0lEXzFfKTt9DQoJLnN0MXtlbmFibGUtYmFja2dyb3VuZDpuZXcgICAgO30NCgkuc3Qye2ZpbGw6I0ZGRkZGRjt9DQo8L3N0eWxlPg0KPGxpbmVhckdyYWRpZW50IGlkPSJTVkdJRF8xXyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSI3LjM3NjQiIHkxPSI1OS4zNjM3IiB4Mj0iNDY4LjY3OCIgeTI9IjU5LjM2MzciPg0KCTxzdG9wICBvZmZzZXQ9IjguNTA4NjYzZS0wNCIgc3R5bGU9InN0b3AtY29sb3I6I0ZGMDAwMCIvPg0KCTxzdG9wICBvZmZzZXQ9IjEiIHN0eWxlPSJzdG9wLWNvbG9yOiNDQzAwMDAiLz4NCjwvbGluZWFyR3JhZGllbnQ+DQo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDU4LjcsMTdIMjUxLjFMMjM4LDRsLTEzLDEzSDE3LjRjLTUuNSwwLTEwLDQuNS0xMCwxMHY3Ny43YzAsNS41LDQuNSwxMCwxMCwxMGg0NDEuNGM1LjUsMCwxMC00LjUsOS45LTEwVjI3DQoJQzQ2OC43LDIxLjUsNDY0LjIsMTcsNDU4LjcsMTd6Ii8+DQo8ZyBjbGFzcz0ic3QxIj4NCgk8cGF0aCBjbGFzcz0ic3QyIiBkPSJNNDkuMSw4MS40Yy0zLjQtMi02LjEtNC44LTcuOS04LjVjLTEuOC0zLjctMi44LTgtMi44LTEyLjljMC00LjksMC45LTkuMiwyLjgtMTIuOWMxLjgtMy43LDQuNS02LjUsNy45LTguNA0KCQljMy40LTIsNy40LTMsMTItM2MzLDAsNS43LDAuNCw4LjMsMS4zYzIuNiwwLjksNC45LDIuMSw2LjksMy44YzAuNiwwLjQsMSwwLjksMS4yLDEuNGMwLjIsMC41LDAuMywxLjEsMC4zLDEuOA0KCQljMCwxLTAuMywxLjgtMC44LDIuNXMtMS4yLDEtMiwxYy0wLjksMC0xLjgtMC4zLTIuOC0wLjljLTEuOS0xLjQtMy43LTIuNC01LjQtM2MtMS43LTAuNi0zLjUtMC44LTUuNS0wLjhjLTQuNywwLTguMiwxLjUtMTAuNiw0LjQNCgkJYy0yLjQsMi45LTMuNiw3LjItMy42LDEyLjhjMCw1LjcsMS4yLDEwLDMuNiwxMi45YzIuNCwyLjksNS45LDQuNCwxMC42LDQuNGMxLjksMCwzLjctMC4zLDUuMy0wLjljMS42LTAuNiwzLjUtMS42LDUuNS0zDQoJCWMwLjQtMC4zLDAuOS0wLjUsMS4zLTAuN2MwLjQtMC4yLDAuOS0wLjMsMS40LTAuM2MwLjgsMCwxLjQsMC4zLDIsMXMwLjgsMS41LDAuOCwyLjVjMCwwLjctMC4xLDEuMy0wLjMsMS44DQoJCWMtMC4yLDAuNS0wLjYsMS0xLjIsMS40Yy0yLDEuNy00LjMsMi45LTYuOSwzLjhjLTIuNiwwLjktNS40LDEuMy04LjMsMS4zQzU2LjUsODQuNCw1Mi41LDgzLjQsNDkuMSw4MS40eiIvPg0KCTxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik05MC4zLDgyLjNjLTIuNS0xLjQtNC41LTMuNC01LjktNmMtMS40LTIuNi0yLjEtNS42LTIuMS05LjFjMC0zLjUsMC43LTYuNSwyLjEtOWMxLjQtMi42LDMuNC00LjYsNS45LTYNCgkJYzIuNS0xLjQsNS41LTIuMSw4LjgtMi4xczYuMywwLjcsOC44LDIuMWMyLjUsMS40LDQuNSwzLjQsNS45LDZjMS40LDIuNiwyLjEsNS42LDIuMSw5YzAsMy41LTAuNyw2LjUtMi4xLDkuMQ0KCQljLTEuNCwyLjYtMy4zLDQuNi01LjksNmMtMi41LDEuNC01LjUsMi4xLTguOCwyLjFTOTIuOCw4My42LDkwLjMsODIuM3ogTTEwNS4zLDc1LjFjMS40LTEuOCwyLjItNC40LDIuMi03LjkNCgkJYzAtMy41LTAuNy02LjEtMi4yLTcuOWMtMS40LTEuOC0zLjUtMi43LTYuMi0yLjdzLTQuOCwwLjktNi4yLDIuN2MtMS41LDEuOC0yLjIsNC41LTIuMiw3LjljMCwzLjUsMC43LDYuMSwyLjIsNy45DQoJCWMxLjQsMS44LDMuNSwyLjcsNi4yLDIuN0MxMDEuOCw3Ny44LDEwMy45LDc2LjksMTA1LjMsNzUuMXoiLz4NCgk8cGF0aCBjbGFzcz0ic3QyIiBkPSJNMTcwLjEsNTMuM2MxLjksMi4xLDIuOSw1LjYsMi45LDEwLjN2MTYuNWMwLDEuMy0wLjQsMi4zLTEuMiwzYy0wLjgsMC43LTEuOCwxLTMuMSwxYy0xLjIsMC0yLjItMC4zLTMtMQ0KCQljLTAuOC0wLjctMS4yLTEuNy0xLjItM1Y2My42YzAtMi41LTAuNC00LjItMS4zLTUuM2MtMC45LTEuMS0yLjItMS42LTQtMS42Yy0yLjIsMC0zLjksMC44LTUuMiwyLjNjLTEuMywxLjUtMiwzLjYtMiw2LjJ2MTUNCgkJYzAsMS4zLTAuNCwyLjMtMS4yLDNjLTAuOCwwLjctMS44LDEtMywxcy0yLjItMC4zLTMtMWMtMC44LTAuNy0xLjItMS43LTEuMi0zVjYzLjZjMC0yLjUtMC40LTQuMi0xLjMtNS4zYy0wLjktMS4xLTIuMi0xLjYtNC0xLjYNCgkJYy0yLjIsMC0zLjksMC44LTUuMiwyLjNjLTEuMywxLjUtMS45LDMuNi0xLjksNi4ydjE1YzAsMS4zLTAuNCwyLjMtMS4yLDNjLTAuOCwwLjctMS44LDEtMywxYy0xLjIsMC0yLjItMC4zLTMtMQ0KCQljLTAuOC0wLjctMS4yLTEuNy0xLjItM3YtMjZjMC0xLjMsMC40LTIuMiwxLjItMi45YzAuOC0wLjcsMS44LTEsMy0xYzEuMiwwLDIuMSwwLjMsMi45LDFjMC43LDAuNywxLjEsMS42LDEuMSwyLjh2MS42DQoJCWMxLTEuOCwyLjQtMy4yLDQuMS00LjFjMS43LTAuOSwzLjctMS40LDYtMS40YzQuOSwwLDguMiwyLjEsOS45LDYuMmMxLTEuOSwyLjQtMy40LDQuNC00LjVjMS45LTEuMSw0LjEtMS43LDYuNS0xLjcNCgkJQzE2NS40LDUwLjEsMTY4LjIsNTEuMiwxNzAuMSw1My4zeiIvPg0KCTxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik0xODIsNDNjLTAuOS0wLjgtMS4zLTEuOS0xLjMtMy4zYzAtMS4zLDAuNC0yLjQsMS4zLTMuMmMwLjktMC44LDIuMS0xLjIsMy42LTEuMmMxLjUsMCwyLjcsMC40LDMuNiwxLjINCgkJYzAuOSwwLjgsMS40LDEuOSwxLjQsMy4yYzAsMS4zLTAuNCwyLjQtMS4zLDMuM2MtMC45LDAuOC0yLjEsMS4yLTMuNiwxLjJDMTg0LjEsNDQuMywxODIuOSw0My44LDE4Miw0M3ogTTE4Mi43LDgzLjINCgkJYy0wLjgtMC43LTEuMi0xLjctMS4yLTN2LTI2YzAtMS4zLDAuNC0yLjMsMS4yLTNjMC44LTAuNywxLjgtMSwzLTFjMS4yLDAsMi4yLDAuMywzLDFjMC44LDAuNywxLjIsMS43LDEuMiwzdjI2DQoJCWMwLDEuMy0wLjQsMi4zLTEuMiwzYy0wLjgsMC43LTEuOCwxLTMsMUMxODQuNSw4NC4yLDE4My41LDgzLjksMTgyLjcsODMuMnoiLz4NCgk8cGF0aCBjbGFzcz0ic3QyIiBkPSJNMjI2LjUsNTMuNWMxLjksMi4yLDIuOSw1LjYsMi45LDEwLjJ2MTYuNWMwLDEuMy0wLjQsMi4yLTEuMSwzcy0xLjgsMS4xLTMuMSwxLjFjLTEuMywwLTIuMy0wLjQtMy4xLTEuMQ0KCQljLTAuOC0wLjctMS4xLTEuNy0xLjEtM1Y2NC4xYzAtMi42LTAuNS00LjQtMS40LTUuNmMtMS0xLjItMi41LTEuNy00LjUtMS43Yy0yLjQsMC00LjQsMC44LTUuOCwyLjNjLTEuNSwxLjUtMi4yLDMuNi0yLjIsNi4xdjE1DQoJCWMwLDEuMy0wLjQsMi4yLTEuMSwzYy0wLjgsMC43LTEuOCwxLjEtMy4xLDEuMWMtMS4zLDAtMi4zLTAuNC0zLjEtMS4xcy0xLjEtMS43LTEuMS0zdi0yNmMwLTEuMiwwLjQtMi4xLDEuMS0yLjgNCgkJYzAuOC0wLjcsMS44LTEuMSwzLjEtMS4xYzEuMiwwLDIuMSwwLjMsMi45LDFjMC43LDAuNywxLjEsMS42LDEuMSwyLjd2MS44YzEuMS0xLjgsMi42LTMuMiw0LjUtNC4yYzEuOS0xLDQtMS41LDYuNC0xLjUNCgkJQzIyMS42LDUwLjEsMjI0LjYsNTEuMiwyMjYuNSw1My41eiIvPg0KCTxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik0yNjguOCw1MS4zYzAuOCwwLjcsMS4xLDEuNywxLjEsMi45djI2LjZjMCw1LjItMS40LDkuMS00LjMsMTEuN2MtMi45LDIuNi03LjEsNC0xMi43LDQNCgkJYy00LjksMC05LTAuOS0xMi4yLTIuOGMtMS43LTEtMi41LTIuMi0yLjUtMy42YzAtMSwwLjItMS44LDAuNy0yLjRjMC41LTAuNiwxLjEtMC45LDEuOC0wLjljMC40LDAsMC45LDAuMSwxLjUsMC4zDQoJCWMwLjYsMC4yLDEuMiwwLjQsMS44LDAuN2MxLjYsMC43LDMuMSwxLjIsNC4zLDEuNWMxLjMsMC40LDIuNywwLjUsNC40LDAuNWM1LjksMCw4LjgtMi45LDguOC04LjZ2LTQuM2MtMSwxLjgtMi40LDMuMy00LjMsNC4zDQoJCWMtMS45LDEtNCwxLjUtNi41LDEuNWMtMi45LDAtNS40LTAuNy03LjYtMi4xYy0yLjItMS40LTQtMy4zLTUuMi01LjhjLTEuMy0yLjUtMS45LTUuMy0xLjktOC41czAuNi02LjEsMS44LTguNg0KCQljMS4yLTIuNSwzLTQuNCw1LjItNS44YzIuMi0xLjQsNC44LTIuMSw3LjctMi4xYzIuNCwwLDQuNiwwLjUsNi41LDEuNWMxLjksMSwzLjMsMi40LDQuMyw0LjN2LTEuN2MwLTEuMiwwLjQtMi4xLDEuMS0yLjgNCgkJYzAuOC0wLjcsMS44LTEuMSwzLTEuMUMyNjcsNTAuMiwyNjgsNTAuNiwyNjguOCw1MS4zeiBNMjU5LjMsNzMuN2MxLjUtMS43LDIuMy00LjEsMi4zLTcuMmMwLTMuMS0wLjgtNS41LTIuMy03LjMNCgkJYy0xLjUtMS43LTMuNi0yLjYtNi4zLTIuNmMtMi42LDAtNC43LDAuOS02LjMsMi42Yy0xLjUsMS43LTIuMyw0LjItMi4zLDcuM2MwLDMsMC44LDUuNCwyLjMsNy4yYzEuNSwxLjcsMy42LDIuNiw2LjMsMi42DQoJCUMyNTUuOCw3Ni4zLDI1Ny44LDc1LjUsMjU5LjMsNzMuN3oiLz4NCgk8cGF0aCBjbGFzcz0ic3QyIiBkPSJNMjk2LjksODEuNGMtMS40LTAuOS0yLjItMi4xLTIuMi0zLjZjMC0wLjksMC4yLTEuNiwwLjctMi4yYzAuNS0wLjYsMS4xLTAuOCwxLjgtMC44YzAuOCwwLDEuOCwwLjQsMy4yLDEuMQ0KCQljMS40LDAuNywyLjcsMS4yLDMuOSwxLjVjMS4yLDAuNCwyLjcsMC41LDQuNSwwLjVjMS45LDAsMy40LTAuMyw0LjQtMC45YzEuMS0wLjYsMS42LTEuNSwxLjYtMi42YzAtMC44LTAuMi0xLjQtMC42LTEuOA0KCQljLTAuNC0wLjQtMS4yLTAuOS0yLjMtMS4yYy0xLjEtMC40LTIuOC0wLjgtNS0xLjNjLTQtMC44LTYuOS0yLTguNi0zLjRjLTEuNy0xLjUtMi42LTMuNS0yLjYtNi4xYzAtMiwwLjYtMy44LDEuNy01LjMNCgkJYzEuMi0xLjYsMi44LTIuOCw0LjgtMy43YzItMC45LDQuNC0xLjMsNy0xLjNjMS45LDAsMy43LDAuMiw1LjQsMC43czMuMywxLjIsNC43LDIuMWMxLjQsMC45LDIuMiwyLjEsMi4yLDMuNg0KCQljMCwwLjktMC4yLDEuNi0wLjcsMi4zYy0wLjUsMC42LTEuMSwwLjktMS44LDAuOWMtMC41LDAtMS0wLjEtMS40LTAuM2MtMC41LTAuMi0xLjEtMC41LTEuOC0wLjljLTEuMy0wLjctMi40LTEuMi0zLjQtMS41DQoJCWMtMC45LTAuMy0yLjEtMC41LTMuNS0wLjVjLTEuNywwLTMsMC4zLTMuOSwxYy0xLDAuNy0xLjQsMS42LTEuNCwyLjhjMCwxLjEsMC41LDIsMS41LDIuNmMxLDAuNiwyLjksMS4yLDUuNywxLjcNCgkJYzMsMC42LDUuNCwxLjMsNy4xLDIuMmMxLjcsMC44LDIuOSwxLjgsMy43LDNzMS4xLDIuOCwxLjEsNC42YzAsMy0xLjMsNS41LTMuOCw3LjNjLTIuNSwxLjgtNS45LDIuOC0xMC4xLDIuOA0KCQlDMzAzLjksODQuMywyOTkuOSw4My40LDI5Ni45LDgxLjR6Ii8+DQoJPHBhdGggY2xhc3M9InN0MiIgZD0iTTMzNS42LDgyLjNjLTIuNS0xLjQtNC41LTMuNC01LjktNmMtMS40LTIuNi0yLjEtNS42LTIuMS05LjFjMC0zLjUsMC43LTYuNSwyLjEtOWMxLjQtMi42LDMuNC00LjYsNS45LTYNCgkJYzIuNS0xLjQsNS41LTIuMSw4LjgtMi4xczYuMywwLjcsOC44LDIuMWMyLjUsMS40LDQuNSwzLjQsNS45LDZjMS40LDIuNiwyLjEsNS42LDIuMSw5YzAsMy41LTAuNyw2LjUtMi4xLDkuMQ0KCQljLTEuNCwyLjYtMy4zLDQuNi01LjksNmMtMi41LDEuNC01LjUsMi4xLTguOCwyLjFTMzM4LjIsODMuNiwzMzUuNiw4Mi4zeiBNMzUwLjcsNzUuMWMxLjQtMS44LDIuMi00LjQsMi4yLTcuOQ0KCQljMC0zLjUtMC43LTYuMS0yLjItNy45Yy0xLjQtMS44LTMuNS0yLjctNi4yLTIuN3MtNC44LDAuOS02LjIsMi43Yy0xLjUsMS44LTIuMiw0LjUtMi4yLDcuOWMwLDMuNSwwLjcsNi4xLDIuMiw3LjkNCgkJYzEuNCwxLjgsMy41LDIuNyw2LjIsMi43QzM0Ny4xLDc3LjgsMzQ5LjIsNzYuOSwzNTAuNyw3NS4xeiIvPg0KCTxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik0zNzQuMyw4Mi4zYy0yLjUtMS40LTQuNS0zLjQtNS45LTZjLTEuNC0yLjYtMi4xLTUuNi0yLjEtOS4xYzAtMy41LDAuNy02LjUsMi4xLTljMS40LTIuNiwzLjQtNC42LDUuOS02DQoJCWMyLjUtMS40LDUuNS0yLjEsOC44LTIuMXM2LjMsMC43LDguOCwyLjFjMi41LDEuNCw0LjUsMy40LDUuOSw2YzEuNCwyLjYsMi4xLDUuNiwyLjEsOWMwLDMuNS0wLjcsNi41LTIuMSw5LjENCgkJYy0xLjQsMi42LTMuMyw0LjYtNS45LDZjLTIuNSwxLjQtNS41LDIuMS04LjgsMi4xUzM3Ni44LDgzLjYsMzc0LjMsODIuM3ogTTM4OS4zLDc1LjFjMS40LTEuOCwyLjItNC40LDIuMi03LjkNCgkJYzAtMy41LTAuNy02LjEtMi4yLTcuOWMtMS40LTEuOC0zLjUtMi43LTYuMi0yLjdzLTQuOCwwLjktNi4yLDIuN2MtMS41LDEuOC0yLjIsNC41LTIuMiw3LjljMCwzLjUsMC43LDYuMSwyLjIsNy45DQoJCWMxLjQsMS44LDMuNSwyLjcsNi4yLDIuN0MzODUuOCw3Ny44LDM4Ny45LDc2LjksMzg5LjMsNzUuMXoiLz4NCgk8cGF0aCBjbGFzcz0ic3QyIiBkPSJNNDM0LjcsNTMuNWMxLjksMi4yLDIuOSw1LjYsMi45LDEwLjJ2MTYuNWMwLDEuMy0wLjQsMi4yLTEuMSwzYy0wLjcsMC43LTEuOCwxLjEtMy4xLDEuMQ0KCQljLTEuMywwLTIuMy0wLjQtMy4xLTEuMWMtMC44LTAuNy0xLjEtMS43LTEuMS0zVjY0LjFjMC0yLjYtMC41LTQuNC0xLjQtNS42Yy0xLTEuMi0yLjUtMS43LTQuNS0xLjdjLTIuNCwwLTQuNCwwLjgtNS44LDIuMw0KCQljLTEuNSwxLjUtMi4yLDMuNi0yLjIsNi4xdjE1YzAsMS4zLTAuNCwyLjItMS4xLDNzLTEuOCwxLjEtMy4xLDEuMWMtMS4zLDAtMi4zLTAuNC0zLjEtMS4xYy0wLjctMC43LTEuMS0xLjctMS4xLTN2LTI2DQoJCWMwLTEuMiwwLjQtMi4xLDEuMS0yLjhjMC44LTAuNywxLjgtMS4xLDMuMS0xLjFjMS4yLDAsMi4xLDAuMywyLjksMWMwLjcsMC43LDEuMSwxLjYsMS4xLDIuN3YxLjhjMS4xLTEuOCwyLjYtMy4yLDQuNS00LjINCgkJYzEuOS0xLDQtMS41LDYuNC0xLjVDNDI5LjksNTAuMSw0MzIuOCw1MS4yLDQzNC43LDUzLjV6Ii8+DQo8L2c+DQo8L3N2Zz4NCg=="
                                  class="ml-2"
                                  style="max-height: 16px; position: absolute; width: 58px; top: 30px; left: 13px;"
                                />
                              </a>
                            </li>
                            <li class="nav-item">
                              <a
                                href="https://timebeats.com/dashboard/view-ads/report"
                                class="nav-link"
                              >Xem quảng cáo</a>
                            </li>
                            <li class="nav-item">
                              <a
                                href="https://timebeats.com/dashboard/shorten/report?group=0"
                                class="nav-link"
                              >Rút gọn link</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div
                        class="panel-body tabs-menu-body main-content-body-right border-top-0 border"
                      >
                        <div class="row">
                          <div class="col-xl-12">
                            <div class="row">
                              <div class="col-lg-6 col-xl-3 col-md-6 col-12">
                                <div class="card bg-primary-gradient text-white">
                                  <div class="card-body">
                                    <div class="row">
                                      <div class="col-2">
                                        <div class="icon1 mt-2 text-center">
                                          <i class="fe fe-bar-chart-2 tx-40"></i>
                                        </div>
                                      </div>
                                      <div class="col-10">
                                        <div class="mt-0 text-center">
                                          <span class="text-white">
                                            Chờ
                                            duyệt
                                          </span>
                                          <h2 class="text-white mb-0">0đ</h2>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="col-lg-6 col-xl-3 col-md-6 col-12">
                                <div class="card bg-success-gradient text-white">
                                  <div class="card-body">
                                    <div class="row">
                                      <div class="col-2">
                                        <div class="icon1 mt-2 text-center">
                                          <i class="fe fe-bar-chart-2 tx-40"></i>
                                        </div>
                                      </div>
                                      <div class="col-10">
                                        <div class="mt-0 text-center">
                                          <span class="text-white">
                                            Tạm
                                            duyệt
                                          </span>
                                          <h2 class="text-white mb-0">0đ</h2>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="col-lg-6 col-xl-3 col-md-6 col-12">
                                <div class="card bg-warning-gradient text-white">
                                  <div class="card-body">
                                    <div class="row">
                                      <div class="col-2">
                                        <div class="icon1 mt-2 text-center">
                                          <i class="fe fe-bar-chart-2 tx-40"></i>
                                        </div>
                                      </div>
                                      <div class="col-10">
                                        <div class="mt-0 text-center">
                                          <span class="text-white">Đã duyệt</span>
                                          <h2 class="text-white mb-0">0đ</h2>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="col-lg-6 col-xl-3 col-md-6 col-12">
                                <div class="card bg-danger-gradient text-white">
                                  <div class="card-body">
                                    <div class="row">
                                      <div class="col-2">
                                        <div class="icon1 mt-2 text-center">
                                          <i class="fe fe-bar-chart-2 tx-40"></i>
                                        </div>
                                      </div>
                                      <div class="col-10">
                                        <div class="mt-0 text-center">
                                          <span class="text-white">Từ chối</span>
                                          <h2 class="text-white mb-0">0đ</h2>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="row" style="margin-left: 0px;">
                              <div class="col-xs-6">
                                <label for>Trạng thái</label>
                                <select name id="status" class="form-control">
                                  <option value>Tất cả</option>
                                  <option value="0">Chờ duyệt</option>
                                  <option value="2">Tạm duyệt</option>
                                  <option value="1">Đã duyệt</option>
                                  <option value="3">Từ chối</option>
                                </select>
                              </div>
                            </div>
                            <div class="table-responsive">
                              <table
                                id="statistic"
                                class="table text-md-nowrap data-table table-bordered table-hover"
                              >
                                <thead>
                                  <tr>
                                    <th class="wd-5p border-bottom-0">ID</th>
                                    <th class="wd-10p border-bottom-0">NGÀY TẠO</th>
                                    <th class="wd-10p border-bottom-0">NỘI DUNG</th>
                                    <th class="wd-10p border-bottom-0">ORDER ID</th>
                                    <th class="wd-10p border-bottom-0">HOA HÔNG</th>
                                    <th class="wd-10p border-bottom-0">TỪ THÀNH VIÊN</th>
                                    <th class="wd-5p border-bottom-0">CẤP</th>
                                    <th class="wd-10p border-bottom-0">TRẠNG THÁI</th>
                                  </tr>
                                </thead>
                                <tbody></tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="feedback" class="tab-pane">
                    <div class="panel panel-primary tabs-style-1">
                      <div class="tab-menu-heading">
                        <div class="tabs-menu1">
                          <ul class="nav panel-tabs main-nav-line">
                            <li class="nav-item">
                              <a
                                href="https://timebeats.com/dashboard/personal-income?type=mission"
                                class="nav-link active"
                              >Nhiệm vụ</a>
                            </li>
                            <li class="nav-item">
                              <a href="#" class="nav-link">
                                Chiến dịch
                                <img
                                  src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyMS4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCA0NzIgMTE4IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0NzIgMTE4OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPg0KCS5zdDB7ZmlsbDp1cmwoI1NWR0lEXzFfKTt9DQoJLnN0MXtlbmFibGUtYmFja2dyb3VuZDpuZXcgICAgO30NCgkuc3Qye2ZpbGw6I0ZGRkZGRjt9DQo8L3N0eWxlPg0KPGxpbmVhckdyYWRpZW50IGlkPSJTVkdJRF8xXyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSI3LjM3NjQiIHkxPSI1OS4zNjM3IiB4Mj0iNDY4LjY3OCIgeTI9IjU5LjM2MzciPg0KCTxzdG9wICBvZmZzZXQ9IjguNTA4NjYzZS0wNCIgc3R5bGU9InN0b3AtY29sb3I6I0ZGMDAwMCIvPg0KCTxzdG9wICBvZmZzZXQ9IjEiIHN0eWxlPSJzdG9wLWNvbG9yOiNDQzAwMDAiLz4NCjwvbGluZWFyR3JhZGllbnQ+DQo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDU4LjcsMTdIMjUxLjFMMjM4LDRsLTEzLDEzSDE3LjRjLTUuNSwwLTEwLDQuNS0xMCwxMHY3Ny43YzAsNS41LDQuNSwxMCwxMCwxMGg0NDEuNGM1LjUsMCwxMC00LjUsOS45LTEwVjI3DQoJQzQ2OC43LDIxLjUsNDY0LjIsMTcsNDU4LjcsMTd6Ii8+DQo8ZyBjbGFzcz0ic3QxIj4NCgk8cGF0aCBjbGFzcz0ic3QyIiBkPSJNNDkuMSw4MS40Yy0zLjQtMi02LjEtNC44LTcuOS04LjVjLTEuOC0zLjctMi44LTgtMi44LTEyLjljMC00LjksMC45LTkuMiwyLjgtMTIuOWMxLjgtMy43LDQuNS02LjUsNy45LTguNA0KCQljMy40LTIsNy40LTMsMTItM2MzLDAsNS43LDAuNCw4LjMsMS4zYzIuNiwwLjksNC45LDIuMSw2LjksMy44YzAuNiwwLjQsMSwwLjksMS4yLDEuNGMwLjIsMC41LDAuMywxLjEsMC4zLDEuOA0KCQljMCwxLTAuMywxLjgtMC44LDIuNXMtMS4yLDEtMiwxYy0wLjksMC0xLjgtMC4zLTIuOC0wLjljLTEuOS0xLjQtMy43LTIuNC01LjQtM2MtMS43LTAuNi0zLjUtMC44LTUuNS0wLjhjLTQuNywwLTguMiwxLjUtMTAuNiw0LjQNCgkJYy0yLjQsMi45LTMuNiw3LjItMy42LDEyLjhjMCw1LjcsMS4yLDEwLDMuNiwxMi45YzIuNCwyLjksNS45LDQuNCwxMC42LDQuNGMxLjksMCwzLjctMC4zLDUuMy0wLjljMS42LTAuNiwzLjUtMS42LDUuNS0zDQoJCWMwLjQtMC4zLDAuOS0wLjUsMS4zLTAuN2MwLjQtMC4yLDAuOS0wLjMsMS40LTAuM2MwLjgsMCwxLjQsMC4zLDIsMXMwLjgsMS41LDAuOCwyLjVjMCwwLjctMC4xLDEuMy0wLjMsMS44DQoJCWMtMC4yLDAuNS0wLjYsMS0xLjIsMS40Yy0yLDEuNy00LjMsMi45LTYuOSwzLjhjLTIuNiwwLjktNS40LDEuMy04LjMsMS4zQzU2LjUsODQuNCw1Mi41LDgzLjQsNDkuMSw4MS40eiIvPg0KCTxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik05MC4zLDgyLjNjLTIuNS0xLjQtNC41LTMuNC01LjktNmMtMS40LTIuNi0yLjEtNS42LTIuMS05LjFjMC0zLjUsMC43LTYuNSwyLjEtOWMxLjQtMi42LDMuNC00LjYsNS45LTYNCgkJYzIuNS0xLjQsNS41LTIuMSw4LjgtMi4xczYuMywwLjcsOC44LDIuMWMyLjUsMS40LDQuNSwzLjQsNS45LDZjMS40LDIuNiwyLjEsNS42LDIuMSw5YzAsMy41LTAuNyw2LjUtMi4xLDkuMQ0KCQljLTEuNCwyLjYtMy4zLDQuNi01LjksNmMtMi41LDEuNC01LjUsMi4xLTguOCwyLjFTOTIuOCw4My42LDkwLjMsODIuM3ogTTEwNS4zLDc1LjFjMS40LTEuOCwyLjItNC40LDIuMi03LjkNCgkJYzAtMy41LTAuNy02LjEtMi4yLTcuOWMtMS40LTEuOC0zLjUtMi43LTYuMi0yLjdzLTQuOCwwLjktNi4yLDIuN2MtMS41LDEuOC0yLjIsNC41LTIuMiw3LjljMCwzLjUsMC43LDYuMSwyLjIsNy45DQoJCWMxLjQsMS44LDMuNSwyLjcsNi4yLDIuN0MxMDEuOCw3Ny44LDEwMy45LDc2LjksMTA1LjMsNzUuMXoiLz4NCgk8cGF0aCBjbGFzcz0ic3QyIiBkPSJNMTcwLjEsNTMuM2MxLjksMi4xLDIuOSw1LjYsMi45LDEwLjN2MTYuNWMwLDEuMy0wLjQsMi4zLTEuMiwzYy0wLjgsMC43LTEuOCwxLTMuMSwxYy0xLjIsMC0yLjItMC4zLTMtMQ0KCQljLTAuOC0wLjctMS4yLTEuNy0xLjItM1Y2My42YzAtMi41LTAuNC00LjItMS4zLTUuM2MtMC45LTEuMS0yLjItMS42LTQtMS42Yy0yLjIsMC0zLjksMC44LTUuMiwyLjNjLTEuMywxLjUtMiwzLjYtMiw2LjJ2MTUNCgkJYzAsMS4zLTAuNCwyLjMtMS4yLDNjLTAuOCwwLjctMS44LDEtMywxcy0yLjItMC4zLTMtMWMtMC44LTAuNy0xLjItMS43LTEuMi0zVjYzLjZjMC0yLjUtMC40LTQuMi0xLjMtNS4zYy0wLjktMS4xLTIuMi0xLjYtNC0xLjYNCgkJYy0yLjIsMC0zLjksMC44LTUuMiwyLjNjLTEuMywxLjUtMS45LDMuNi0xLjksNi4ydjE1YzAsMS4zLTAuNCwyLjMtMS4yLDNjLTAuOCwwLjctMS44LDEtMywxYy0xLjIsMC0yLjItMC4zLTMtMQ0KCQljLTAuOC0wLjctMS4yLTEuNy0xLjItM3YtMjZjMC0xLjMsMC40LTIuMiwxLjItMi45YzAuOC0wLjcsMS44LTEsMy0xYzEuMiwwLDIuMSwwLjMsMi45LDFjMC43LDAuNywxLjEsMS42LDEuMSwyLjh2MS42DQoJCWMxLTEuOCwyLjQtMy4yLDQuMS00LjFjMS43LTAuOSwzLjctMS40LDYtMS40YzQuOSwwLDguMiwyLjEsOS45LDYuMmMxLTEuOSwyLjQtMy40LDQuNC00LjVjMS45LTEuMSw0LjEtMS43LDYuNS0xLjcNCgkJQzE2NS40LDUwLjEsMTY4LjIsNTEuMiwxNzAuMSw1My4zeiIvPg0KCTxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik0xODIsNDNjLTAuOS0wLjgtMS4zLTEuOS0xLjMtMy4zYzAtMS4zLDAuNC0yLjQsMS4zLTMuMmMwLjktMC44LDIuMS0xLjIsMy42LTEuMmMxLjUsMCwyLjcsMC40LDMuNiwxLjINCgkJYzAuOSwwLjgsMS40LDEuOSwxLjQsMy4yYzAsMS4zLTAuNCwyLjQtMS4zLDMuM2MtMC45LDAuOC0yLjEsMS4yLTMuNiwxLjJDMTg0LjEsNDQuMywxODIuOSw0My44LDE4Miw0M3ogTTE4Mi43LDgzLjINCgkJYy0wLjgtMC43LTEuMi0xLjctMS4yLTN2LTI2YzAtMS4zLDAuNC0yLjMsMS4yLTNjMC44LTAuNywxLjgtMSwzLTFjMS4yLDAsMi4yLDAuMywzLDFjMC44LDAuNywxLjIsMS43LDEuMiwzdjI2DQoJCWMwLDEuMy0wLjQsMi4zLTEuMiwzYy0wLjgsMC43LTEuOCwxLTMsMUMxODQuNSw4NC4yLDE4My41LDgzLjksMTgyLjcsODMuMnoiLz4NCgk8cGF0aCBjbGFzcz0ic3QyIiBkPSJNMjI2LjUsNTMuNWMxLjksMi4yLDIuOSw1LjYsMi45LDEwLjJ2MTYuNWMwLDEuMy0wLjQsMi4yLTEuMSwzcy0xLjgsMS4xLTMuMSwxLjFjLTEuMywwLTIuMy0wLjQtMy4xLTEuMQ0KCQljLTAuOC0wLjctMS4xLTEuNy0xLjEtM1Y2NC4xYzAtMi42LTAuNS00LjQtMS40LTUuNmMtMS0xLjItMi41LTEuNy00LjUtMS43Yy0yLjQsMC00LjQsMC44LTUuOCwyLjNjLTEuNSwxLjUtMi4yLDMuNi0yLjIsNi4xdjE1DQoJCWMwLDEuMy0wLjQsMi4yLTEuMSwzYy0wLjgsMC43LTEuOCwxLjEtMy4xLDEuMWMtMS4zLDAtMi4zLTAuNC0zLjEtMS4xcy0xLjEtMS43LTEuMS0zdi0yNmMwLTEuMiwwLjQtMi4xLDEuMS0yLjgNCgkJYzAuOC0wLjcsMS44LTEuMSwzLjEtMS4xYzEuMiwwLDIuMSwwLjMsMi45LDFjMC43LDAuNywxLjEsMS42LDEuMSwyLjd2MS44YzEuMS0xLjgsMi42LTMuMiw0LjUtNC4yYzEuOS0xLDQtMS41LDYuNC0xLjUNCgkJQzIyMS42LDUwLjEsMjI0LjYsNTEuMiwyMjYuNSw1My41eiIvPg0KCTxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik0yNjguOCw1MS4zYzAuOCwwLjcsMS4xLDEuNywxLjEsMi45djI2LjZjMCw1LjItMS40LDkuMS00LjMsMTEuN2MtMi45LDIuNi03LjEsNC0xMi43LDQNCgkJYy00LjksMC05LTAuOS0xMi4yLTIuOGMtMS43LTEtMi41LTIuMi0yLjUtMy42YzAtMSwwLjItMS44LDAuNy0yLjRjMC41LTAuNiwxLjEtMC45LDEuOC0wLjljMC40LDAsMC45LDAuMSwxLjUsMC4zDQoJCWMwLjYsMC4yLDEuMiwwLjQsMS44LDAuN2MxLjYsMC43LDMuMSwxLjIsNC4zLDEuNWMxLjMsMC40LDIuNywwLjUsNC40LDAuNWM1LjksMCw4LjgtMi45LDguOC04LjZ2LTQuM2MtMSwxLjgtMi40LDMuMy00LjMsNC4zDQoJCWMtMS45LDEtNCwxLjUtNi41LDEuNWMtMi45LDAtNS40LTAuNy03LjYtMi4xYy0yLjItMS40LTQtMy4zLTUuMi01LjhjLTEuMy0yLjUtMS45LTUuMy0xLjktOC41czAuNi02LjEsMS44LTguNg0KCQljMS4yLTIuNSwzLTQuNCw1LjItNS44YzIuMi0xLjQsNC44LTIuMSw3LjctMi4xYzIuNCwwLDQuNiwwLjUsNi41LDEuNWMxLjksMSwzLjMsMi40LDQuMyw0LjN2LTEuN2MwLTEuMiwwLjQtMi4xLDEuMS0yLjgNCgkJYzAuOC0wLjcsMS44LTEuMSwzLTEuMUMyNjcsNTAuMiwyNjgsNTAuNiwyNjguOCw1MS4zeiBNMjU5LjMsNzMuN2MxLjUtMS43LDIuMy00LjEsMi4zLTcuMmMwLTMuMS0wLjgtNS41LTIuMy03LjMNCgkJYy0xLjUtMS43LTMuNi0yLjYtNi4zLTIuNmMtMi42LDAtNC43LDAuOS02LjMsMi42Yy0xLjUsMS43LTIuMyw0LjItMi4zLDcuM2MwLDMsMC44LDUuNCwyLjMsNy4yYzEuNSwxLjcsMy42LDIuNiw2LjMsMi42DQoJCUMyNTUuOCw3Ni4zLDI1Ny44LDc1LjUsMjU5LjMsNzMuN3oiLz4NCgk8cGF0aCBjbGFzcz0ic3QyIiBkPSJNMjk2LjksODEuNGMtMS40LTAuOS0yLjItMi4xLTIuMi0zLjZjMC0wLjksMC4yLTEuNiwwLjctMi4yYzAuNS0wLjYsMS4xLTAuOCwxLjgtMC44YzAuOCwwLDEuOCwwLjQsMy4yLDEuMQ0KCQljMS40LDAuNywyLjcsMS4yLDMuOSwxLjVjMS4yLDAuNCwyLjcsMC41LDQuNSwwLjVjMS45LDAsMy40LTAuMyw0LjQtMC45YzEuMS0wLjYsMS42LTEuNSwxLjYtMi42YzAtMC44LTAuMi0xLjQtMC42LTEuOA0KCQljLTAuNC0wLjQtMS4yLTAuOS0yLjMtMS4yYy0xLjEtMC40LTIuOC0wLjgtNS0xLjNjLTQtMC44LTYuOS0yLTguNi0zLjRjLTEuNy0xLjUtMi42LTMuNS0yLjYtNi4xYzAtMiwwLjYtMy44LDEuNy01LjMNCgkJYzEuMi0xLjYsMi44LTIuOCw0LjgtMy43YzItMC45LDQuNC0xLjMsNy0xLjNjMS45LDAsMy43LDAuMiw1LjQsMC43czMuMywxLjIsNC43LDIuMWMxLjQsMC45LDIuMiwyLjEsMi4yLDMuNg0KCQljMCwwLjktMC4yLDEuNi0wLjcsMi4zYy0wLjUsMC42LTEuMSwwLjktMS44LDAuOWMtMC41LDAtMS0wLjEtMS40LTAuM2MtMC41LTAuMi0xLjEtMC41LTEuOC0wLjljLTEuMy0wLjctMi40LTEuMi0zLjQtMS41DQoJCWMtMC45LTAuMy0yLjEtMC41LTMuNS0wLjVjLTEuNywwLTMsMC4zLTMuOSwxYy0xLDAuNy0xLjQsMS42LTEuNCwyLjhjMCwxLjEsMC41LDIsMS41LDIuNmMxLDAuNiwyLjksMS4yLDUuNywxLjcNCgkJYzMsMC42LDUuNCwxLjMsNy4xLDIuMmMxLjcsMC44LDIuOSwxLjgsMy43LDNzMS4xLDIuOCwxLjEsNC42YzAsMy0xLjMsNS41LTMuOCw3LjNjLTIuNSwxLjgtNS45LDIuOC0xMC4xLDIuOA0KCQlDMzAzLjksODQuMywyOTkuOSw4My40LDI5Ni45LDgxLjR6Ii8+DQoJPHBhdGggY2xhc3M9InN0MiIgZD0iTTMzNS42LDgyLjNjLTIuNS0xLjQtNC41LTMuNC01LjktNmMtMS40LTIuNi0yLjEtNS42LTIuMS05LjFjMC0zLjUsMC43LTYuNSwyLjEtOWMxLjQtMi42LDMuNC00LjYsNS45LTYNCgkJYzIuNS0xLjQsNS41LTIuMSw4LjgtMi4xczYuMywwLjcsOC44LDIuMWMyLjUsMS40LDQuNSwzLjQsNS45LDZjMS40LDIuNiwyLjEsNS42LDIuMSw5YzAsMy41LTAuNyw2LjUtMi4xLDkuMQ0KCQljLTEuNCwyLjYtMy4zLDQuNi01LjksNmMtMi41LDEuNC01LjUsMi4xLTguOCwyLjFTMzM4LjIsODMuNiwzMzUuNiw4Mi4zeiBNMzUwLjcsNzUuMWMxLjQtMS44LDIuMi00LjQsMi4yLTcuOQ0KCQljMC0zLjUtMC43LTYuMS0yLjItNy45Yy0xLjQtMS44LTMuNS0yLjctNi4yLTIuN3MtNC44LDAuOS02LjIsMi43Yy0xLjUsMS44LTIuMiw0LjUtMi4yLDcuOWMwLDMuNSwwLjcsNi4xLDIuMiw3LjkNCgkJYzEuNCwxLjgsMy41LDIuNyw2LjIsMi43QzM0Ny4xLDc3LjgsMzQ5LjIsNzYuOSwzNTAuNyw3NS4xeiIvPg0KCTxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik0zNzQuMyw4Mi4zYy0yLjUtMS40LTQuNS0zLjQtNS45LTZjLTEuNC0yLjYtMi4xLTUuNi0yLjEtOS4xYzAtMy41LDAuNy02LjUsMi4xLTljMS40LTIuNiwzLjQtNC42LDUuOS02DQoJCWMyLjUtMS40LDUuNS0yLjEsOC44LTIuMXM2LjMsMC43LDguOCwyLjFjMi41LDEuNCw0LjUsMy40LDUuOSw2YzEuNCwyLjYsMi4xLDUuNiwyLjEsOWMwLDMuNS0wLjcsNi41LTIuMSw5LjENCgkJYy0xLjQsMi42LTMuMyw0LjYtNS45LDZjLTIuNSwxLjQtNS41LDIuMS04LjgsMi4xUzM3Ni44LDgzLjYsMzc0LjMsODIuM3ogTTM4OS4zLDc1LjFjMS40LTEuOCwyLjItNC40LDIuMi03LjkNCgkJYzAtMy41LTAuNy02LjEtMi4yLTcuOWMtMS40LTEuOC0zLjUtMi43LTYuMi0yLjdzLTQuOCwwLjktNi4yLDIuN2MtMS41LDEuOC0yLjIsNC41LTIuMiw3LjljMCwzLjUsMC43LDYuMSwyLjIsNy45DQoJCWMxLjQsMS44LDMuNSwyLjcsNi4yLDIuN0MzODUuOCw3Ny44LDM4Ny45LDc2LjksMzg5LjMsNzUuMXoiLz4NCgk8cGF0aCBjbGFzcz0ic3QyIiBkPSJNNDM0LjcsNTMuNWMxLjksMi4yLDIuOSw1LjYsMi45LDEwLjJ2MTYuNWMwLDEuMy0wLjQsMi4yLTEuMSwzYy0wLjcsMC43LTEuOCwxLjEtMy4xLDEuMQ0KCQljLTEuMywwLTIuMy0wLjQtMy4xLTEuMWMtMC44LTAuNy0xLjEtMS43LTEuMS0zVjY0LjFjMC0yLjYtMC41LTQuNC0xLjQtNS42Yy0xLTEuMi0yLjUtMS43LTQuNS0xLjdjLTIuNCwwLTQuNCwwLjgtNS44LDIuMw0KCQljLTEuNSwxLjUtMi4yLDMuNi0yLjIsNi4xdjE1YzAsMS4zLTAuNCwyLjItMS4xLDNzLTEuOCwxLjEtMy4xLDEuMWMtMS4zLDAtMi4zLTAuNC0zLjEtMS4xYy0wLjctMC43LTEuMS0xLjctMS4xLTN2LTI2DQoJCWMwLTEuMiwwLjQtMi4xLDEuMS0yLjhjMC44LTAuNywxLjgtMS4xLDMuMS0xLjFjMS4yLDAsMi4xLDAuMywyLjksMWMwLjcsMC43LDEuMSwxLjYsMS4xLDIuN3YxLjhjMS4xLTEuOCwyLjYtMy4yLDQuNS00LjINCgkJYzEuOS0xLDQtMS41LDYuNC0xLjVDNDI5LjksNTAuMSw0MzIuOCw1MS4yLDQzNC43LDUzLjV6Ii8+DQo8L2c+DQo8L3N2Zz4NCg=="
                                  class="ml-2"
                                  style="max-height: 16px; position: absolute; width: 58px; top: 30px; left: 14px;"
                                />
                              </a>
                            </li>
                            <li class="nav-item">
                              <a href="#" class="nav-link">
                                Hoàn tiền
                                <img
                                  src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyMS4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCA0NzIgMTE4IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0NzIgMTE4OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPg0KCS5zdDB7ZmlsbDp1cmwoI1NWR0lEXzFfKTt9DQoJLnN0MXtlbmFibGUtYmFja2dyb3VuZDpuZXcgICAgO30NCgkuc3Qye2ZpbGw6I0ZGRkZGRjt9DQo8L3N0eWxlPg0KPGxpbmVhckdyYWRpZW50IGlkPSJTVkdJRF8xXyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSI3LjM3NjQiIHkxPSI1OS4zNjM3IiB4Mj0iNDY4LjY3OCIgeTI9IjU5LjM2MzciPg0KCTxzdG9wICBvZmZzZXQ9IjguNTA4NjYzZS0wNCIgc3R5bGU9InN0b3AtY29sb3I6I0ZGMDAwMCIvPg0KCTxzdG9wICBvZmZzZXQ9IjEiIHN0eWxlPSJzdG9wLWNvbG9yOiNDQzAwMDAiLz4NCjwvbGluZWFyR3JhZGllbnQ+DQo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDU4LjcsMTdIMjUxLjFMMjM4LDRsLTEzLDEzSDE3LjRjLTUuNSwwLTEwLDQuNS0xMCwxMHY3Ny43YzAsNS41LDQuNSwxMCwxMCwxMGg0NDEuNGM1LjUsMCwxMC00LjUsOS45LTEwVjI3DQoJQzQ2OC43LDIxLjUsNDY0LjIsMTcsNDU4LjcsMTd6Ii8+DQo8ZyBjbGFzcz0ic3QxIj4NCgk8cGF0aCBjbGFzcz0ic3QyIiBkPSJNNDkuMSw4MS40Yy0zLjQtMi02LjEtNC44LTcuOS04LjVjLTEuOC0zLjctMi44LTgtMi44LTEyLjljMC00LjksMC45LTkuMiwyLjgtMTIuOWMxLjgtMy43LDQuNS02LjUsNy45LTguNA0KCQljMy40LTIsNy40LTMsMTItM2MzLDAsNS43LDAuNCw4LjMsMS4zYzIuNiwwLjksNC45LDIuMSw2LjksMy44YzAuNiwwLjQsMSwwLjksMS4yLDEuNGMwLjIsMC41LDAuMywxLjEsMC4zLDEuOA0KCQljMCwxLTAuMywxLjgtMC44LDIuNXMtMS4yLDEtMiwxYy0wLjksMC0xLjgtMC4zLTIuOC0wLjljLTEuOS0xLjQtMy43LTIuNC01LjQtM2MtMS43LTAuNi0zLjUtMC44LTUuNS0wLjhjLTQuNywwLTguMiwxLjUtMTAuNiw0LjQNCgkJYy0yLjQsMi45LTMuNiw3LjItMy42LDEyLjhjMCw1LjcsMS4yLDEwLDMuNiwxMi45YzIuNCwyLjksNS45LDQuNCwxMC42LDQuNGMxLjksMCwzLjctMC4zLDUuMy0wLjljMS42LTAuNiwzLjUtMS42LDUuNS0zDQoJCWMwLjQtMC4zLDAuOS0wLjUsMS4zLTAuN2MwLjQtMC4yLDAuOS0wLjMsMS40LTAuM2MwLjgsMCwxLjQsMC4zLDIsMXMwLjgsMS41LDAuOCwyLjVjMCwwLjctMC4xLDEuMy0wLjMsMS44DQoJCWMtMC4yLDAuNS0wLjYsMS0xLjIsMS40Yy0yLDEuNy00LjMsMi45LTYuOSwzLjhjLTIuNiwwLjktNS40LDEuMy04LjMsMS4zQzU2LjUsODQuNCw1Mi41LDgzLjQsNDkuMSw4MS40eiIvPg0KCTxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik05MC4zLDgyLjNjLTIuNS0xLjQtNC41LTMuNC01LjktNmMtMS40LTIuNi0yLjEtNS42LTIuMS05LjFjMC0zLjUsMC43LTYuNSwyLjEtOWMxLjQtMi42LDMuNC00LjYsNS45LTYNCgkJYzIuNS0xLjQsNS41LTIuMSw4LjgtMi4xczYuMywwLjcsOC44LDIuMWMyLjUsMS40LDQuNSwzLjQsNS45LDZjMS40LDIuNiwyLjEsNS42LDIuMSw5YzAsMy41LTAuNyw2LjUtMi4xLDkuMQ0KCQljLTEuNCwyLjYtMy4zLDQuNi01LjksNmMtMi41LDEuNC01LjUsMi4xLTguOCwyLjFTOTIuOCw4My42LDkwLjMsODIuM3ogTTEwNS4zLDc1LjFjMS40LTEuOCwyLjItNC40LDIuMi03LjkNCgkJYzAtMy41LTAuNy02LjEtMi4yLTcuOWMtMS40LTEuOC0zLjUtMi43LTYuMi0yLjdzLTQuOCwwLjktNi4yLDIuN2MtMS41LDEuOC0yLjIsNC41LTIuMiw3LjljMCwzLjUsMC43LDYuMSwyLjIsNy45DQoJCWMxLjQsMS44LDMuNSwyLjcsNi4yLDIuN0MxMDEuOCw3Ny44LDEwMy45LDc2LjksMTA1LjMsNzUuMXoiLz4NCgk8cGF0aCBjbGFzcz0ic3QyIiBkPSJNMTcwLjEsNTMuM2MxLjksMi4xLDIuOSw1LjYsMi45LDEwLjN2MTYuNWMwLDEuMy0wLjQsMi4zLTEuMiwzYy0wLjgsMC43LTEuOCwxLTMuMSwxYy0xLjIsMC0yLjItMC4zLTMtMQ0KCQljLTAuOC0wLjctMS4yLTEuNy0xLjItM1Y2My42YzAtMi41LTAuNC00LjItMS4zLTUuM2MtMC45LTEuMS0yLjItMS42LTQtMS42Yy0yLjIsMC0zLjksMC44LTUuMiwyLjNjLTEuMywxLjUtMiwzLjYtMiw2LjJ2MTUNCgkJYzAsMS4zLTAuNCwyLjMtMS4yLDNjLTAuOCwwLjctMS44LDEtMywxcy0yLjItMC4zLTMtMWMtMC44LTAuNy0xLjItMS43LTEuMi0zVjYzLjZjMC0yLjUtMC40LTQuMi0xLjMtNS4zYy0wLjktMS4xLTIuMi0xLjYtNC0xLjYNCgkJYy0yLjIsMC0zLjksMC44LTUuMiwyLjNjLTEuMywxLjUtMS45LDMuNi0xLjksNi4ydjE1YzAsMS4zLTAuNCwyLjMtMS4yLDNjLTAuOCwwLjctMS44LDEtMywxYy0xLjIsMC0yLjItMC4zLTMtMQ0KCQljLTAuOC0wLjctMS4yLTEuNy0xLjItM3YtMjZjMC0xLjMsMC40LTIuMiwxLjItMi45YzAuOC0wLjcsMS44LTEsMy0xYzEuMiwwLDIuMSwwLjMsMi45LDFjMC43LDAuNywxLjEsMS42LDEuMSwyLjh2MS42DQoJCWMxLTEuOCwyLjQtMy4yLDQuMS00LjFjMS43LTAuOSwzLjctMS40LDYtMS40YzQuOSwwLDguMiwyLjEsOS45LDYuMmMxLTEuOSwyLjQtMy40LDQuNC00LjVjMS45LTEuMSw0LjEtMS43LDYuNS0xLjcNCgkJQzE2NS40LDUwLjEsMTY4LjIsNTEuMiwxNzAuMSw1My4zeiIvPg0KCTxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik0xODIsNDNjLTAuOS0wLjgtMS4zLTEuOS0xLjMtMy4zYzAtMS4zLDAuNC0yLjQsMS4zLTMuMmMwLjktMC44LDIuMS0xLjIsMy42LTEuMmMxLjUsMCwyLjcsMC40LDMuNiwxLjINCgkJYzAuOSwwLjgsMS40LDEuOSwxLjQsMy4yYzAsMS4zLTAuNCwyLjQtMS4zLDMuM2MtMC45LDAuOC0yLjEsMS4yLTMuNiwxLjJDMTg0LjEsNDQuMywxODIuOSw0My44LDE4Miw0M3ogTTE4Mi43LDgzLjINCgkJYy0wLjgtMC43LTEuMi0xLjctMS4yLTN2LTI2YzAtMS4zLDAuNC0yLjMsMS4yLTNjMC44LTAuNywxLjgtMSwzLTFjMS4yLDAsMi4yLDAuMywzLDFjMC44LDAuNywxLjIsMS43LDEuMiwzdjI2DQoJCWMwLDEuMy0wLjQsMi4zLTEuMiwzYy0wLjgsMC43LTEuOCwxLTMsMUMxODQuNSw4NC4yLDE4My41LDgzLjksMTgyLjcsODMuMnoiLz4NCgk8cGF0aCBjbGFzcz0ic3QyIiBkPSJNMjI2LjUsNTMuNWMxLjksMi4yLDIuOSw1LjYsMi45LDEwLjJ2MTYuNWMwLDEuMy0wLjQsMi4yLTEuMSwzcy0xLjgsMS4xLTMuMSwxLjFjLTEuMywwLTIuMy0wLjQtMy4xLTEuMQ0KCQljLTAuOC0wLjctMS4xLTEuNy0xLjEtM1Y2NC4xYzAtMi42LTAuNS00LjQtMS40LTUuNmMtMS0xLjItMi41LTEuNy00LjUtMS43Yy0yLjQsMC00LjQsMC44LTUuOCwyLjNjLTEuNSwxLjUtMi4yLDMuNi0yLjIsNi4xdjE1DQoJCWMwLDEuMy0wLjQsMi4yLTEuMSwzYy0wLjgsMC43LTEuOCwxLjEtMy4xLDEuMWMtMS4zLDAtMi4zLTAuNC0zLjEtMS4xcy0xLjEtMS43LTEuMS0zdi0yNmMwLTEuMiwwLjQtMi4xLDEuMS0yLjgNCgkJYzAuOC0wLjcsMS44LTEuMSwzLjEtMS4xYzEuMiwwLDIuMSwwLjMsMi45LDFjMC43LDAuNywxLjEsMS42LDEuMSwyLjd2MS44YzEuMS0xLjgsMi42LTMuMiw0LjUtNC4yYzEuOS0xLDQtMS41LDYuNC0xLjUNCgkJQzIyMS42LDUwLjEsMjI0LjYsNTEuMiwyMjYuNSw1My41eiIvPg0KCTxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik0yNjguOCw1MS4zYzAuOCwwLjcsMS4xLDEuNywxLjEsMi45djI2LjZjMCw1LjItMS40LDkuMS00LjMsMTEuN2MtMi45LDIuNi03LjEsNC0xMi43LDQNCgkJYy00LjksMC05LTAuOS0xMi4yLTIuOGMtMS43LTEtMi41LTIuMi0yLjUtMy42YzAtMSwwLjItMS44LDAuNy0yLjRjMC41LTAuNiwxLjEtMC45LDEuOC0wLjljMC40LDAsMC45LDAuMSwxLjUsMC4zDQoJCWMwLjYsMC4yLDEuMiwwLjQsMS44LDAuN2MxLjYsMC43LDMuMSwxLjIsNC4zLDEuNWMxLjMsMC40LDIuNywwLjUsNC40LDAuNWM1LjksMCw4LjgtMi45LDguOC04LjZ2LTQuM2MtMSwxLjgtMi40LDMuMy00LjMsNC4zDQoJCWMtMS45LDEtNCwxLjUtNi41LDEuNWMtMi45LDAtNS40LTAuNy03LjYtMi4xYy0yLjItMS40LTQtMy4zLTUuMi01LjhjLTEuMy0yLjUtMS45LTUuMy0xLjktOC41czAuNi02LjEsMS44LTguNg0KCQljMS4yLTIuNSwzLTQuNCw1LjItNS44YzIuMi0xLjQsNC44LTIuMSw3LjctMi4xYzIuNCwwLDQuNiwwLjUsNi41LDEuNWMxLjksMSwzLjMsMi40LDQuMyw0LjN2LTEuN2MwLTEuMiwwLjQtMi4xLDEuMS0yLjgNCgkJYzAuOC0wLjcsMS44LTEuMSwzLTEuMUMyNjcsNTAuMiwyNjgsNTAuNiwyNjguOCw1MS4zeiBNMjU5LjMsNzMuN2MxLjUtMS43LDIuMy00LjEsMi4zLTcuMmMwLTMuMS0wLjgtNS41LTIuMy03LjMNCgkJYy0xLjUtMS43LTMuNi0yLjYtNi4zLTIuNmMtMi42LDAtNC43LDAuOS02LjMsMi42Yy0xLjUsMS43LTIuMyw0LjItMi4zLDcuM2MwLDMsMC44LDUuNCwyLjMsNy4yYzEuNSwxLjcsMy42LDIuNiw2LjMsMi42DQoJCUMyNTUuOCw3Ni4zLDI1Ny44LDc1LjUsMjU5LjMsNzMuN3oiLz4NCgk8cGF0aCBjbGFzcz0ic3QyIiBkPSJNMjk2LjksODEuNGMtMS40LTAuOS0yLjItMi4xLTIuMi0zLjZjMC0wLjksMC4yLTEuNiwwLjctMi4yYzAuNS0wLjYsMS4xLTAuOCwxLjgtMC44YzAuOCwwLDEuOCwwLjQsMy4yLDEuMQ0KCQljMS40LDAuNywyLjcsMS4yLDMuOSwxLjVjMS4yLDAuNCwyLjcsMC41LDQuNSwwLjVjMS45LDAsMy40LTAuMyw0LjQtMC45YzEuMS0wLjYsMS42LTEuNSwxLjYtMi42YzAtMC44LTAuMi0xLjQtMC42LTEuOA0KCQljLTAuNC0wLjQtMS4yLTAuOS0yLjMtMS4yYy0xLjEtMC40LTIuOC0wLjgtNS0xLjNjLTQtMC44LTYuOS0yLTguNi0zLjRjLTEuNy0xLjUtMi42LTMuNS0yLjYtNi4xYzAtMiwwLjYtMy44LDEuNy01LjMNCgkJYzEuMi0xLjYsMi44LTIuOCw0LjgtMy43YzItMC45LDQuNC0xLjMsNy0xLjNjMS45LDAsMy43LDAuMiw1LjQsMC43czMuMywxLjIsNC43LDIuMWMxLjQsMC45LDIuMiwyLjEsMi4yLDMuNg0KCQljMCwwLjktMC4yLDEuNi0wLjcsMi4zYy0wLjUsMC42LTEuMSwwLjktMS44LDAuOWMtMC41LDAtMS0wLjEtMS40LTAuM2MtMC41LTAuMi0xLjEtMC41LTEuOC0wLjljLTEuMy0wLjctMi40LTEuMi0zLjQtMS41DQoJCWMtMC45LTAuMy0yLjEtMC41LTMuNS0wLjVjLTEuNywwLTMsMC4zLTMuOSwxYy0xLDAuNy0xLjQsMS42LTEuNCwyLjhjMCwxLjEsMC41LDIsMS41LDIuNmMxLDAuNiwyLjksMS4yLDUuNywxLjcNCgkJYzMsMC42LDUuNCwxLjMsNy4xLDIuMmMxLjcsMC44LDIuOSwxLjgsMy43LDNzMS4xLDIuOCwxLjEsNC42YzAsMy0xLjMsNS41LTMuOCw3LjNjLTIuNSwxLjgtNS45LDIuOC0xMC4xLDIuOA0KCQlDMzAzLjksODQuMywyOTkuOSw4My40LDI5Ni45LDgxLjR6Ii8+DQoJPHBhdGggY2xhc3M9InN0MiIgZD0iTTMzNS42LDgyLjNjLTIuNS0xLjQtNC41LTMuNC01LjktNmMtMS40LTIuNi0yLjEtNS42LTIuMS05LjFjMC0zLjUsMC43LTYuNSwyLjEtOWMxLjQtMi42LDMuNC00LjYsNS45LTYNCgkJYzIuNS0xLjQsNS41LTIuMSw4LjgtMi4xczYuMywwLjcsOC44LDIuMWMyLjUsMS40LDQuNSwzLjQsNS45LDZjMS40LDIuNiwyLjEsNS42LDIuMSw5YzAsMy41LTAuNyw2LjUtMi4xLDkuMQ0KCQljLTEuNCwyLjYtMy4zLDQuNi01LjksNmMtMi41LDEuNC01LjUsMi4xLTguOCwyLjFTMzM4LjIsODMuNiwzMzUuNiw4Mi4zeiBNMzUwLjcsNzUuMWMxLjQtMS44LDIuMi00LjQsMi4yLTcuOQ0KCQljMC0zLjUtMC43LTYuMS0yLjItNy45Yy0xLjQtMS44LTMuNS0yLjctNi4yLTIuN3MtNC44LDAuOS02LjIsMi43Yy0xLjUsMS44LTIuMiw0LjUtMi4yLDcuOWMwLDMuNSwwLjcsNi4xLDIuMiw3LjkNCgkJYzEuNCwxLjgsMy41LDIuNyw2LjIsMi43QzM0Ny4xLDc3LjgsMzQ5LjIsNzYuOSwzNTAuNyw3NS4xeiIvPg0KCTxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik0zNzQuMyw4Mi4zYy0yLjUtMS40LTQuNS0zLjQtNS45LTZjLTEuNC0yLjYtMi4xLTUuNi0yLjEtOS4xYzAtMy41LDAuNy02LjUsMi4xLTljMS40LTIuNiwzLjQtNC42LDUuOS02DQoJCWMyLjUtMS40LDUuNS0yLjEsOC44LTIuMXM2LjMsMC43LDguOCwyLjFjMi41LDEuNCw0LjUsMy40LDUuOSw2YzEuNCwyLjYsMi4xLDUuNiwyLjEsOWMwLDMuNS0wLjcsNi41LTIuMSw5LjENCgkJYy0xLjQsMi42LTMuMyw0LjYtNS45LDZjLTIuNSwxLjQtNS41LDIuMS04LjgsMi4xUzM3Ni44LDgzLjYsMzc0LjMsODIuM3ogTTM4OS4zLDc1LjFjMS40LTEuOCwyLjItNC40LDIuMi03LjkNCgkJYzAtMy41LTAuNy02LjEtMi4yLTcuOWMtMS40LTEuOC0zLjUtMi43LTYuMi0yLjdzLTQuOCwwLjktNi4yLDIuN2MtMS41LDEuOC0yLjIsNC41LTIuMiw3LjljMCwzLjUsMC43LDYuMSwyLjIsNy45DQoJCWMxLjQsMS44LDMuNSwyLjcsNi4yLDIuN0MzODUuOCw3Ny44LDM4Ny45LDc2LjksMzg5LjMsNzUuMXoiLz4NCgk8cGF0aCBjbGFzcz0ic3QyIiBkPSJNNDM0LjcsNTMuNWMxLjksMi4yLDIuOSw1LjYsMi45LDEwLjJ2MTYuNWMwLDEuMy0wLjQsMi4yLTEuMSwzYy0wLjcsMC43LTEuOCwxLjEtMy4xLDEuMQ0KCQljLTEuMywwLTIuMy0wLjQtMy4xLTEuMWMtMC44LTAuNy0xLjEtMS43LTEuMS0zVjY0LjFjMC0yLjYtMC41LTQuNC0xLjQtNS42Yy0xLTEuMi0yLjUtMS43LTQuNS0xLjdjLTIuNCwwLTQuNCwwLjgtNS44LDIuMw0KCQljLTEuNSwxLjUtMi4yLDMuNi0yLjIsNi4xdjE1YzAsMS4zLTAuNCwyLjItMS4xLDNzLTEuOCwxLjEtMy4xLDEuMWMtMS4zLDAtMi4zLTAuNC0zLjEtMS4xYy0wLjctMC43LTEuMS0xLjctMS4xLTN2LTI2DQoJCWMwLTEuMiwwLjQtMi4xLDEuMS0yLjhjMC44LTAuNywxLjgtMS4xLDMuMS0xLjFjMS4yLDAsMi4xLDAuMywyLjksMWMwLjcsMC43LDEuMSwxLjYsMS4xLDIuN3YxLjhjMS4xLTEuOCwyLjYtMy4yLDQuNS00LjINCgkJYzEuOS0xLDQtMS41LDYuNC0xLjVDNDI5LjksNTAuMSw0MzIuOCw1MS4yLDQzNC43LDUzLjV6Ii8+DQo8L2c+DQo8L3N2Zz4NCg=="
                                  class="ml-2"
                                  style="max-height: 16px; position: absolute; width: 58px; top: 30px; left: 13px;"
                                />
                              </a>
                            </li>
                            <li class="nav-item">
                              <a
                                href="https://timebeats.com/dashboard/view-ads/report"
                                class="nav-link"
                              >Xem quảng cáo</a>
                            </li>
                            <li class="nav-item">
                              <a
                                href="https://timebeats.com/dashboard/shorten/report?group=0"
                                class="nav-link"
                              >Rút gọn link</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div
                        class="panel-body tabs-menu-body main-content-body-right border-top-0 border"
                      >
                        <div class="row">
                          <div class="col-xl-12">
                            <div class="row">
                              <div class="col-lg-6 col-xl-3 col-md-6 col-12">
                                <div class="card bg-primary-gradient text-white">
                                  <div class="card-body">
                                    <div class="row">
                                      <div class="col-2">
                                        <div class="icon1 mt-2 text-center">
                                          <i class="fe fe-bar-chart-2 tx-40"></i>
                                        </div>
                                      </div>
                                      <div class="col-10">
                                        <div class="mt-0 text-center">
                                          <span class="text-white">
                                            Chờ
                                            duyệt
                                          </span>
                                          <h2 class="text-white mb-0">0đ</h2>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="col-lg-6 col-xl-3 col-md-6 col-12">
                                <div class="card bg-success-gradient text-white">
                                  <div class="card-body">
                                    <div class="row">
                                      <div class="col-2">
                                        <div class="icon1 mt-2 text-center">
                                          <i class="fe fe-bar-chart-2 tx-40"></i>
                                        </div>
                                      </div>
                                      <div class="col-10">
                                        <div class="mt-0 text-center">
                                          <span class="text-white">
                                            Tạm
                                            duyệt
                                          </span>
                                          <h2 class="text-white mb-0">0đ</h2>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="col-lg-6 col-xl-3 col-md-6 col-12">
                                <div class="card bg-warning-gradient text-white">
                                  <div class="card-body">
                                    <div class="row">
                                      <div class="col-2">
                                        <div class="icon1 mt-2 text-center">
                                          <i class="fe fe-bar-chart-2 tx-40"></i>
                                        </div>
                                      </div>
                                      <div class="col-10">
                                        <div class="mt-0 text-center">
                                          <span class="text-white">Đã duyệt</span>
                                          <h2 class="text-white mb-0">0đ</h2>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="col-lg-6 col-xl-3 col-md-6 col-12">
                                <div class="card bg-danger-gradient text-white">
                                  <div class="card-body">
                                    <div class="row">
                                      <div class="col-2">
                                        <div class="icon1 mt-2 text-center">
                                          <i class="fe fe-bar-chart-2 tx-40"></i>
                                        </div>
                                      </div>
                                      <div class="col-10">
                                        <div class="mt-0 text-center">
                                          <span class="text-white">Từ chối</span>
                                          <h2 class="text-white mb-0">0đ</h2>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="row" style="margin-left: 0px;">
                              <div class="col-xs-6">
                                <label for>Trạng thái</label>
                                <select name id="status" class="form-control">
                                  <option value>Tất cả</option>
                                  <option value="0">Chờ duyệt</option>
                                  <option value="2">Tạm duyệt</option>
                                  <option value="1">Đã duyệt</option>
                                  <option value="3">Từ chối</option>
                                </select>
                              </div>
                            </div>
                            <div class="table-responsive">
                              <table
                                id="statistic"
                                class="table text-md-nowrap data-table table-bordered table-hover"
                              >
                                <thead>
                                  <tr>
                                    <th class="wd-5p border-bottom-0">ID</th>
                                    <th class="wd-10p border-bottom-0">NGÀY TẠO</th>
                                    <th class="wd-10p border-bottom-0">NỘI DUNG</th>
                                    <th class="wd-10p border-bottom-0">ORDER ID</th>
                                    <th class="wd-10p border-bottom-0">HOA HÔNG</th>
                                    <th class="wd-10p border-bottom-0">TỪ THÀNH VIÊN</th>
                                    <th class="wd-5p border-bottom-0">CẤP</th>
                                    <th class="wd-10p border-bottom-0">TRẠNG THÁI</th>
                                  </tr>
                                </thead>
                                <tbody></tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    id="modal-resource"
                    tabindex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                    class="modal fade"
                  >
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 id class="modal-title">THÊM MỚI TÀI NGUYÊN</h5>
                          <button
                            type="button"
                            data-dismiss="modal"
                            aria-label="Close"
                            class="close"
                          >
                            <span aria-hidden="true">×</span>
                          </button>
                        </div>
                        <div class="modal-body">
                          <div class="card-body">
                            <form action="/social/add-account-social" method="post">
                              <p class="text-danger"></p>
                              <input
                                type="hidden"
                                name="_token"
                                value="NUsQFF66-HgOai8bOxrFrGkWgHwMqN9FNOwk"
                              />
                              <div class="form-body">
                                <h6 class="card-title">Mạng xã hội</h6>
                                <div class="row">
                                  <div class="col-md-12">
                                    <div class="form-group">
                                      <select
                                        required="required"
                                        name="social_code"
                                        class="form-control"
                                      >
                                        <option value>Tất cả</option>
                                        <option value>Facebook</option>
                                        <option value>Youtube</option>
                                        <option value>TikTok</option>
                                        <option value>ZingMp3</option>
                                        <option value>NhacCuaTui</option>
                                      </select>
                                    </div>
                                  </div>
                                </div>
                                <h5>
                                  Yêu cầu (cung cấp thông tin tài khoản
                                  <b class="text-danger">*</b>)
                                </h5>
                                <div id="requre_area">
                                  <h6 class="card-title user-pass-show">
                                    Tài khoản - Mật
                                    khẩu
                                    (ex: timebeat@gmail.com-timebit@tinh)
                                  </h6>
                                  <div class="row user-pass-show">
                                    <div class="col-md-12">
                                      <div class="form-group">
                                        <input
                                          type="text"
                                          name="user-pass"
                                          required="required"
                                          class="form-control"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <h6 class="card-title">Cookie</h6>
                                  <div class="row">
                                    <div class="col-md-12">
                                      <div class="form-group">
                                        <textarea
                                          name="cookie"
                                          id
                                          cols="30"
                                          rows="10"
                                          required="required"
                                          class="form-control"
                                        ></textarea>
                                      </div>
                                    </div>
                                  </div>
                                  <h6 class="card-title">Token</h6>
                                  <div class="row">
                                    <div class="col-md-12">
                                      <div class="form-group">
                                        <input
                                          type="text"
                                          name="token"
                                          required="required"
                                          class="form-control"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="form-actions">
                                  <div class="text-center">
                                    <button type="submit" class="btn btn-info">Lưu</button>
                                  </div>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>