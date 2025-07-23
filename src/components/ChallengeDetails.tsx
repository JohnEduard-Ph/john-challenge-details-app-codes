import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Heart, Plus, X, QrCode } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Progress } from '@/components/ui/progress';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';

import stage1Image from '@/assets/stage1-running.jpg';
import stage2Image from '@/assets/stage2-swimming.jpg';
import stage3Image from '@/assets/stage3-cycling.jpg';
import stage4Image from '@/assets/stage4-hiking.jpg';
import stage5Image from '@/assets/stage5-goal.jpg';
import running1Image from '@/assets/running-1.jpg';
import running2Image from '@/assets/running-2.jpg';
import swimmingActivityImage from '@/assets/swimming-activity.jpg';

const ChallengeDetails = () => {
  const [currentStage, setCurrentStage] = useState(0);
  const [activeTab, setActiveTab] = useState('Details');
  const [imageModalOpen, setImageModalOpen] = useState(false);
  const [rewardContributionModalOpen, setRewardContributionModalOpen] = useState(false);
  const [invitationModalOpen, setInvitationModalOpen] = useState(false);
  const [inviteFriendsModalOpen, setInviteFriendsModalOpen] = useState(false);
  const [qrCodeModalOpen, setQrCodeModalOpen] = useState(false);
  const [selectedModalImage, setSelectedModalImage] = useState('');

  const stages = [
    { image: stage1Image, label: 'Stage 1' },
    { image: stage2Image, label: 'Stage 2' },
    { image: stage3Image, label: 'Stage 3' },
    { image: stage4Image, label: 'Stage 4' },
    { image: stage5Image, label: 'Goal!' }
  ];

  const tabs = ['Details', 'Status', 'Participate', 'Messages'];

  const criteria = [
    { title: 'Accumulate total of 100k steps.', progress: 100, points: 1000, completed: true },
    { title: 'Swim total of 25km', progress: 10, points: 1000, completed: false },
    { title: 'Cycle 300km', progress: 0, points: 1000, completed: false },
    { title: 'Hiking up Bt Tim-ah Hill', progress: 0, gems: 5, completed: false }
  ];

  const teamMembers = [
    { name: 'Alyssa Claire', status: 'Active' },
    { name: 'Juliana Arla', status: 'Active' },
    { name: 'John Eduard', status: 'Active' }
  ];

  const teams = [
    'Net-roc Team 1', 'Net-roc Team 2', 'Net-roc Team 3', 'Net-roc Team 4',
    'Net-roc Team 5', 'Net-roc Team 6', 'Net-roc Team 7', 'Net-roc Team 8',
    'Net-roc Team 9', 'Net-roc Team 10'
  ];

  const leaderboard = [
    { rank: 1, name: 'Net-roc Team 10', gems: 5, points: 3000 },
    { rank: 2, name: 'Net-roc Team 3', gems: 0, points: 2000 },
    { rank: 3, name: 'Net-roc Team 1', gems: 0, points: 1000 },
    { rank: 4, name: 'Net-roc Team 2', gems: 0, points: 0 },
    { rank: 5, name: 'Net-roc Team 4', gems: 0, points: 0 },
    { rank: 6, name: 'Net-roc Team 5', gems: 0, points: 0 },
    { rank: 7, name: 'Net-roc Team 6', gems: 0, points: 0 },
    { rank: 8, name: 'Net-roc Team 7', gems: 0, points: 0 },
    { rank: 9, name: 'Net-roc Team 8', gems: 0, points: 0 },
    { rank: 10, name: 'Net-roc Team 9', gems: 0, points: 0 }
  ];

  const friends = [
    { name: 'Juliana Arla', status: 'Active', points: 399000, avatar: '👩‍🦱' },
    { name: 'Alyssa Claire', status: 'Active', points: 272000, avatar: '👩‍🎤' },
    { name: 'James Liu', status: 'Active', points: 878000, avatar: '👨‍💼' }
  ];

  const received = [
    { name: 'John Eduard', status: 'Active', points: 5, avatar: '😊', message: "Hey! What's the status of your stage?", time: 'Now', type: 'message' },
    { name: 'Sponge Bob', status: 'Offline', points: 123458, avatar: '🧽', message: "Sponge Bob Nudged You! Nudge back?", time: '2hrs', type: 'nudge' }
  ];

  const participateStages = [
    { title: 'Swim total of 25km', completed: false, files: [] },
    { title: 'Cycle 300km', completed: false, files: [] },
    { title: 'Hiking up Bt Tim-ah Hill', completed: false, files: [] },
    { title: 'Accumulate total of 100k steps.', completed: true, files: [
      { name: 'IMG_2023032.jpg', image: running1Image },
      { name: 'IMG_2023033.jpg', image: running2Image }
    ] }
  ];

  const friendsList = [
    { name: 'Juliana Arla', status: 'Active', points: 399000, selected: true },
    { name: 'Alyssa Claire', status: 'Active', points: 272000, selected: false },
    { name: 'John Eduard', status: 'Active', points: 5, selected: true },
    { name: 'Sponge Bob Square Pants', status: 'Offline', points: 123458, selected: false }
  ];

  const openImageModal = (image: string) => {
    setSelectedModalImage(image);
    setImageModalOpen(true);
  };

  const getTimelineCircleColor = (index: number) => {
    if (index < currentStage) return 'bg-timeline-completed border-timeline-completed';
    if (index === currentStage) return 'bg-timeline-active border-timeline-active';
    if (index === 4) return 'bg-timeline-goal border-timeline-goal';
    return 'bg-timeline-inactive border-gray-300';
  };

  const renderTabButton = (tab: string) => (
    <Button
      key={tab}
      variant="ghost"
      className={`flex-1 rounded-full py-2 px-4 text-sm font-medium transition-all ${
        activeTab === tab
          ? 'bg-primary text-primary-foreground'
          : 'bg-background text-foreground border border-foreground hover:bg-muted'
      }`}
      onClick={() => setActiveTab(tab)}
    >
      {tab}
    </Button>
  );

  return (
    <div className="max-w-md mx-auto bg-background min-h-screen">
      {/* Title Bar */}
      <div className="p-4">
        <h1 className="text-xl font-bold text-foreground">Challenge Details</h1>
      </div>

      {/* Hero Section with Timeline */}
      <Card className="mx-4 mb-4 p-0 overflow-hidden">
        <div className="relative">
          <img
            src={stages[currentStage].image}
            alt={stages[currentStage].label}
            className="w-full h-48 object-cover cursor-pointer"
            onClick={() => openImageModal(stages[currentStage].image)}
          />
          
          {/* Navigation arrows */}
          <Button
            variant="ghost"
            size="sm"
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white hover:bg-black/70"
            onClick={() => setCurrentStage(Math.max(0, currentStage - 1))}
            disabled={currentStage === 0}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white hover:bg-black/70"
            onClick={() => setCurrentStage(Math.min(4, currentStage + 1))}
            disabled={currentStage === 4}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>

          {/* Timeline */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center space-x-2">
            {stages.map((stage, index) => (
              <div key={index} className="flex flex-col items-center">
                <div
                  className={`w-4 h-4 rounded-full border-2 transition-all cursor-pointer ${getTimelineCircleColor(index)}`}
                  onClick={() => setCurrentStage(index)}
                />
                <span className="text-xs text-white mt-1 font-medium w-12 text-center whitespace-nowrap">{stage.label}</span>
              </div>
            ))}
          </div>
        </div>
      </Card>

      {/* Challenge Overview */}
      <Card className="mx-4 mb-4 p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground text-lg">🏃</span>
            </div>
            <div>
              <h2 className="font-bold text-lg">Summer Fitness Bootcamp</h2>
              <p className="text-sm text-muted-foreground">by Network Rocket</p>
            </div>
          </div>
          <div className="flex items-center space-x-1">
            <Heart className="h-4 w-4 text-primary fill-primary" />
            <span className="text-sm font-medium">298</span>
          </div>
        </div>
        
        <div className="mb-3">
          <span className="text-sm font-medium text-primary">Team Challenge</span>
        </div>
        
        <p className="text-sm text-muted-foreground mb-4">
          Join the Summer Fitness Bootcamp by Network Rocket! This team challenge is all about pushing your limits, 
          staying active, and having fun with your squad. Get ready to compete, stay fit, and achieve your goals together!
        </p>
        
        <div>
          <p className="text-sm font-medium mb-2">Challenge Rewards:</p>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <span className="text-blue-500">💎</span>
              <span className="text-sm">5 Gems</span>
            </div>
            <div className="flex items-center space-x-1">
              <span className="text-yellow-500">⭐</span>
              <span className="text-sm">3,000 Points</span>
            </div>
          </div>
        </div>
      </Card>

      {/* Tab Navigation */}
      <div className="px-4 mb-4">
        <div className="flex space-x-2 bg-muted rounded-full p-1">
          {tabs.map(renderTabButton)}
        </div>
      </div>

      {/* Tab Content */}
      <div className="px-4 pb-6">
        {activeTab === 'Details' && (
          <Card className="p-4">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground">🏃</span>
              </div>
              <h3 className="font-bold">Summer Fitness Bootcamp</h3>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">Challenge Criteria:</h4>
              
              {criteria.map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">{item.title}</span>
                    <div className="flex items-center space-x-2">
                      {item.points && (
                        <span className="text-yellow-500 text-xs">⭐ {item.points} Points</span>
                      )}
                      {item.gems && (
                        <span className="text-blue-500 text-xs">💎 {item.gems} Gems</span>
                      )}
                      <Button
                        size="sm"
                        variant={item.completed ? "secondary" : "outline"}
                        className={`text-xs ${index === 0 && item.completed ? 'bg-[#A42138] text-white hover:bg-[#A42138]/90' : ''}`}
                        disabled={!item.completed}
                      >
                        {item.completed ? 'Claim Reward' : 'Claim Reward'}
                      </Button>
                    </div>
                  </div>
                  <Progress value={item.progress} className="h-2" />
                  <div className="text-xs text-right text-muted-foreground">{item.progress}%</div>
                </div>
              ))}

              <h4 className="font-medium text-primary mb-4 mt-6">Goal!</h4>

              <div className="space-y-3">
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => setRewardContributionModalOpen(true)}
                >
                  Request for Reward Contribution
                </Button>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => setInvitationModalOpen(true)}
                >
                  Received Invitations for a Special Role
                </Button>
              </div>
            </div>
          </Card>
        )}

        {activeTab === 'Status' && (
          <Card className="p-4">
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <span className="font-medium">Your Team: 🎯 Net-roc Team 1</span>
                  </div>
                </div>
                
                <div className="space-y-2 mb-4">
                  {teamMembers.map((member, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">{member.name}</span>
                    </div>
                  ))}
                </div>

                <div className="flex space-x-2 mb-6">
                  <Button 
                    variant="outline" 
                    className="flex-1"
                    onClick={() => setInviteFriendsModalOpen(true)}
                  >
                    Invite
                  </Button>
                  <Button 
                    variant="outline" 
                    className="flex-1"
                    onClick={() => setQrCodeModalOpen(true)}
                  >
                    QR Code
                  </Button>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-3">Teams:</h4>
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {teams.map((team, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">{team}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-3">Leaderboard</h4>
                <div className="space-y-2">
                  {leaderboard.map((entry, index) => (
                    <div key={index} className={`flex items-center justify-between p-3 rounded-lg ${
                      entry.rank === 1 ? 'bg-primary text-primary-foreground' : 'bg-muted'
                    }`}>
                      <div className="flex items-center space-x-3">
                        {entry.rank === 1 && <span className="text-yellow-500">👑</span>}
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold ${
                          entry.rank === 1 ? 'bg-yellow-500 text-black' : 'bg-primary text-primary-foreground'
                        }`}>
                          {entry.rank}
                        </div>
                        <span className="text-sm font-medium">🎯 {entry.name}</span>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-blue-500">💎 {entry.gems} Gems</div>
                        <div className="text-xs text-yellow-500">⭐ {entry.points} Points</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        )}

        {activeTab === 'Participate' && (
          <Card className="p-4">
            <div className="space-y-6">
              {participateStages.map((stage, index) => (
                <div key={index} className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">{stage.title}</span>
                    {stage.completed ? (
                      <Button size="sm" variant="secondary" disabled className="text-xs">
                        Done
                      </Button>
                    ) : (
                      <Button size="sm" variant="outline" className="text-xs">
                        Submit
                      </Button>
                    )}
                  </div>
                  
                  {stage.completed ? (
                    <div className="space-y-3">
                      <div className="text-xs text-muted-foreground">July 22, 2025</div>
                      <div className="flex space-x-2">
                        {stage.files.map((file, fileIndex) => (
                          <div key={fileIndex} className="w-16 h-16 bg-muted rounded flex items-center justify-center overflow-hidden">
                            <img 
                              src={file.image} 
                              alt={file.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        ))}
                      </div>
                      <div className="flex space-x-2">
                        {stage.files.map((file, fileIndex) => (
                          <span key={fileIndex} className="text-xs text-center">{file.name}</span>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      <div className="w-16 h-16 bg-muted rounded flex items-center justify-center overflow-hidden">
                        <img 
                          src={swimmingActivityImage} 
                          alt="Swimming activity"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <span className="text-xs text-center">swimming_session.jpg</span>
                      <div className="flex items-center justify-center w-16 h-16 bg-muted rounded border-2 border-dashed border-gray-300">
                        <Plus className="h-6 w-6 text-muted-foreground" />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </Card>
        )}

        {activeTab === 'Messages' && (
          <Card className="p-4">
            <div className="space-y-6">
              <div>
                <h4 className="font-medium mb-4">Friends:</h4>
                <div className="space-y-3">
                  {friends.map((friend, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center text-white">
                          {friend.avatar}
                        </div>
                        <div>
                          <div className="font-medium text-sm">{friend.name}</div>
                          <div className="text-xs text-green-500">Status: {friend.status}</div>
                          <div className="text-xs text-yellow-500">⭐ {friend.points.toLocaleString()} Points</div>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline" className="text-xs">
                          Message
                        </Button>
                        <Button size="sm" variant="outline" className="text-xs">
                          Nudge
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="text-center mt-4">
                  <Button variant="link" className="text-sm">See All Friends</Button>
                </div>
              </div>

              <div className="border-t pt-4">
                <h4 className="font-medium mb-4">Received:</h4>
                <div className="space-y-3">
                  {received.map((item, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-green-500 flex items-center justify-center text-white">
                            {item.avatar}
                          </div>
                          <div>
                            <div className="font-medium text-sm">{item.name}</div>
                            <div className="text-xs text-green-500">Status: {item.status}</div>
                            <div className="text-xs text-yellow-500">⭐ {item.points} Points</div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="text-xs text-muted-foreground">{item.time}</span>
                          {item.time === 'Now' && <div className="w-2 h-2 bg-primary rounded-full"></div>}
                        </div>
                      </div>
                      <div className="ml-13">
                        <p className="text-sm text-muted-foreground mb-2">{item.message}</p>
                        <Button size="sm" className="text-xs">
                          {item.type === 'message' ? 'Reply' : 'Nudge Back'}
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        )}
      </div>

      {/* Image Modal */}
      <Dialog open={imageModalOpen} onOpenChange={setImageModalOpen}>
        <DialogContent className="max-w-sm p-0 bg-black/90">
          <img
            src={selectedModalImage}
            alt="Challenge stage"
            className="w-full h-auto"
          />
        </DialogContent>
      </Dialog>

      {/* Reward Contribution Modal */}
      <Dialog open={rewardContributionModalOpen} onOpenChange={setRewardContributionModalOpen}>
        <DialogContent className="max-w-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold">Request for Reward Contribution</h3>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setRewardContributionModalOpen(false)}
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="space-y-3 mb-4">
            {friendsList.map((friend, index) => (
              <div key={index} className="flex items-center space-x-3">
                <Checkbox checked={friend.selected} />
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center text-white">
                  {friend.name.charAt(0)}
                </div>
                <div className="flex-1">
                  <div className="font-medium text-sm">{friend.name}</div>
                  <div className="text-xs text-yellow-500">⭐ {friend.points.toLocaleString()} Points</div>
                </div>
                <div className="text-xs text-green-500">Status: {friend.status}</div>
              </div>
            ))}
          </div>

          <div className="bg-muted rounded-lg p-3 mb-4">
            <div className="flex items-center justify-between text-sm mb-2">
              <span>Request for: ⭐</span>
              <span>Quantity: 0</span>
            </div>
            <Textarea
              placeholder="Type your message here."
              className="min-h-20"
            />
          </div>

          <Button className="w-full">
            Send Request
          </Button>
        </DialogContent>
      </Dialog>

      {/* Invitation Modal */}
      <Dialog open={invitationModalOpen} onOpenChange={setInvitationModalOpen}>
        <DialogContent className="max-w-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold">Received Invitations for a Special Role</h3>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setInvitationModalOpen(false)}
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="bg-muted rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-green-500 flex items-center justify-center text-white">
                  👨‍💼
                </div>
                <div>
                  <span className="text-sm">James Liu invited you to be a Verifier!</span>
                </div>
              </div>
              <span className="text-xs text-muted-foreground">3min</span>
            </div>
            <div className="flex space-x-2 mt-3">
              <Button size="sm" className="flex-1">Accept</Button>
              <Button size="sm" variant="outline" className="flex-1">Decline</Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Invite Friends Modal */}
      <Dialog open={inviteFriendsModalOpen} onOpenChange={setInviteFriendsModalOpen}>
        <DialogContent className="max-w-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold">Invite Friends</h3>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setInviteFriendsModalOpen(false)}
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="space-y-3 mb-4">
            {friendsList.map((friend, index) => (
              <div key={index} className="flex items-center space-x-3">
                <Checkbox checked={index === 3} />
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center text-white">
                  {friend.name.charAt(0)}
                </div>
                <div className="flex-1">
                  <div className="font-medium text-sm">{friend.name}</div>
                  <div className="text-xs text-yellow-500">⭐ {friend.points.toLocaleString()} Points</div>
                </div>
                <div className="text-xs text-green-500">Status: {friend.status}</div>
              </div>
            ))}
          </div>

          <Button className="w-full">
            Invite
          </Button>
        </DialogContent>
      </Dialog>

      {/* QR Code Modal */}
      <Dialog open={qrCodeModalOpen} onOpenChange={setQrCodeModalOpen}>
        <DialogContent className="max-w-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold">QR Code</h3>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setQrCodeModalOpen(false)}
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="flex flex-col items-center space-y-4">
            <div className="w-48 h-48 bg-muted rounded-lg flex items-center justify-center">
              <QrCode className="h-32 w-32 text-foreground" />
            </div>
            <Button className="w-full">
              Share
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ChallengeDetails;