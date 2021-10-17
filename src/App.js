<Modal show={show} onHide={() => handleClose()} animation={false}>
                <Modal.Header closeButton>
                  <Modal.Title>Details</Modal.Title>
                </Modal.Header>
                <Modal.Header>First Name</Modal.Header>
                <Modal.Body>{item.first_name}</Modal.Body>
                <Modal.Body>Last Name</Modal.Body>
                <Modal.Body>{item.last_name}</Modal.Body>
                <Modal.Body>Email</Modal.Body>
                <Modal.Body>{item.email}</Modal.Body>
                <Modal.Body>
                  <img src={item.avatar} />
                </Modal.Body>
                <Modal.Footer></Modal.Footer>
              </Modal>